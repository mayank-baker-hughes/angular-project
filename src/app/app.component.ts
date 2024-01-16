import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import {UsersDataService} from './services/users-data.service'
import { Post } from './post';
import { log } from 'console';

// import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  providers:[HttpClient],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'component-interaction';
  posts : Post[] =[];

  users :any;
  constructor(private userData:UsersDataService){}

  ngOnInit(){
    this.userData.getAllPosts().subscribe({
      next:(posts)=>{
        this.posts= posts;
        console.log(posts);
        
      },
    })

  }




  
}
