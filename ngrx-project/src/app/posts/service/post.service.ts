import { Post } from './../../model/Post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/model/Post';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  //* todo komentarze pobierane po klikniecia na post ( w innym komponencie ) *//

  create(post: Post) {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }
}
