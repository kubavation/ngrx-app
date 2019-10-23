import { Post } from 'src/app/model/Post';
import { Observable, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducer/state';
import { FetchPosts } from 'src/app/actions/post.actions';
import { createAction } from '@ngrx/store';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.posts$ = store.select(fromRoot.getPosts);
   }

  ngOnInit() {
    this.store.dispatch(new FetchPosts());
  }

}
