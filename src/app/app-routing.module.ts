import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";

// Layouts
export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule',
        data:{
          title2:"Dashboard"
        }
      },{
        path: 'posts',
        loadChildren: './components/posts/posts.module#PostsModule',
        data:{
          title3:"Posts"
        }
      },
      // {
      //   path: 'login',
      //   loadChildren: './components/login/login.module#LoginModule'
      // },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
