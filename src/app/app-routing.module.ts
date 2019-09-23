import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostComponent } from './post/list-post/list-post.component';
import { FormPostComponent } from './post/form-post/form-post.component';


const routes: Routes = [
  {path:'posts',component:ListPostComponent},
  {path:'creepost',component:FormPostComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
