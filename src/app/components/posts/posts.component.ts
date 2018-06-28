import { Component, OnInit } from '@angular/core';
import { PostsService, PostDto, ListResultDtoOfPostListDto } from './posts.service'

@Component({
  templateUrl: './posts.component.html',
  selector:'posts'
})
export class PostsComponent 
{
    constructor(
        private _postsService: PostsService
    ) {
        
    }

    public posts: PostDto[] = new Array<PostDto>();

    public resp: ListResultDtoOfPostListDto = new ListResultDtoOfPostListDto();
    getPosts(): void {
        this._postsService.getPosts().subscribe(result => {
            this.posts = result.items;
        });
    }

    public settings = {
        columns: {
          userId: {
            title: 'User ID',
            filter:false,
            editable:false
          },
          id: {
            title: 'ID',
            filter:false
          },
          title: {
            title: 'Title',
            filter:true
          },
          body: {
            title: 'Post',
            filter:true
          }
        }
      };
}


