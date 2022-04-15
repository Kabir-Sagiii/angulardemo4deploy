import { Component, OnInit } from '@angular/core';
import {GithubserviceService} from '../../Services/githubservice.service'

@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.css']
})
export class GithubHomeComponent implements OnInit {
   userData:any
  constructor(private service:GithubserviceService) { }

  ngOnInit(): void {
         
  }
  getuserData(value:any) {
     this.userData=value
  }

}
