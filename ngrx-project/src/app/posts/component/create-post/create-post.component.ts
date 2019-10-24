import { AddPost } from './../../../actions/post.actions';
import { PostService } from './../../service/post.service';
import { Post } from 'src/app/model/Post';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducer/state';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private post: Post = {id: 1, userId: 1, title: '', body: ''};

  constructor(public store: Store<State>) { }

  ngOnInit() {
  }

  create() {
    this.store.dispatch(new AddPost(this.post));
  }

}
