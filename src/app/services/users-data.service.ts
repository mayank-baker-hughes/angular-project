import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable }from 'rxjs'
import {Post} from '../post'


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url:any = "https://jsonplaceholder.typicode.com/users"

  constructor(private http :HttpClient) { }

 getAllPosts():Observable<Post[]>{
  return this.http.get<Post[]>(this.url)
 }
}
