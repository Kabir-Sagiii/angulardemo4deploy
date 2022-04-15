import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  @Input() userData:any 

  constructor() { }

  ngOnInit(): void {
    console.log(this.userData)
  }

}
