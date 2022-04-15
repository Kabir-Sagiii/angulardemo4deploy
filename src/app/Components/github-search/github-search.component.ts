import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import {GithubserviceService} from '../../Services/githubservice.service'

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  @Output() Cevent = new EventEmitter()

  constructor(private service:GithubserviceService) { }
  getuser(data:any ) {
    this.service.getUserData(data).subscribe((res:any)=>{
         console.log(res)
         this.Cevent.emit(res)
    })
       console.log(data)
  }

  ngOnInit(): void {
  }

}
