
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { blobToText, throwException } from '../../shared/utils/serviceutils.module'

export const API_BASE_URL = new InjectionToken<string>('https://jsonplaceholder.typicode.com');
@Injectable()
export class PostsService {
    private http: HttpClient;
    private baseUrl: string = "https://jsonplaceholder.typicode.com";
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getPosts(): Observable<ListResultDtoOfPostListDto> {
        //let url_ = this.baseUrl + "/posts";
        let url_ = "https://jsonplaceholder.typicode.com/posts";
        url_ = url_.replace(/[?&]$/, "");
        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).flatMap((response_: any) => {
            return this.processGetPosts(response_);
        }).catch((response_: any) => {
            if (response_ instanceof HttpResponse) {
                try {
                    return this.processGetPosts(response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfPostListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfPostListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetPosts(response: HttpResponse<Blob>): Observable<ListResultDtoOfPostListDto> {
        const status = response.status;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
        if (status === 200) {
            return blobToText(response.body).flatMap(_responseText => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ListResultDtoOfPostListDto.fromJS(resultData200) : new ListResultDtoOfPostListDto();
                return Observable.of(result200);
            });
        } else if (status !== 200 && status !== 204) {
            return blobToText(response.body).flatMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Observable.of<ListResultDtoOfPostListDto>(<any>null);
    }

    
}


export class ListResultDtoOfPostListDto implements IListResultDtoOfPostListDto {
    items: PostDto[] | undefined;

    constructor(data?: IListResultDtoOfPostListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data.constructor === Array) {
                this.items = [];
                for (let item of data)
                    this.items.push(PostDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfPostListDto {
        let result = new ListResultDtoOfPostListDto();
        result.init(data);
        return result;
    }
}

export interface IListResultDtoOfPostListDto {
    items: PostDto[] | undefined;
}

export class PostDto implements IPostDto {
    userId: number | 0;
    id: number | 0;
    title: string | undefined;
    body: number | 0;

    constructor(data?: IPostDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.id = data["id"];
            this.title = data["title"];
            this.body = data["body"];
        }
    }

    static fromJS(data: any): PostDto {
        let result = new PostDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["id"] = this.id;
        data["title"] = this.title;
        data["body"] = this.body;
        return data;
    }
}

export interface IPostDto {
    userId: number | 0;
    id: number | 0;
    title: string | undefined;
    body: number | 0;
}