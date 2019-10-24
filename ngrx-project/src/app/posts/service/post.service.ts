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

  create(post: Post) {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  findAllCommentsByPost(postId): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
  }
  
}
