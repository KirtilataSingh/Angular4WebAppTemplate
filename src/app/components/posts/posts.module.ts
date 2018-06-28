import { NgModule } from '@angular/core';
import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";
import { PostsRoutingModule } from './posts-routing'
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    PostsRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [ PostsComponent],
  providers: [ PostsService ]
})
export class PostsModule { }
