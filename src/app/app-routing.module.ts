import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubHomeComponent } from './Components/github-home/github-home.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
     path:"githubsearch",component:GithubHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
