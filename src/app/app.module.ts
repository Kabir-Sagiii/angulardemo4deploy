import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { GithubHomeComponent } from './Components/github-home/github-home.component';
import { GithubSearchComponent } from './Components/github-search/github-search.component';
import { GithubProfileComponent } from './Components/github-profile/github-profile.component';
import { GithubDetailsComponent } from './Components/github-details/github-details.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubHomeComponent,
    GithubSearchComponent,
    GithubProfileComponent,
    GithubDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
