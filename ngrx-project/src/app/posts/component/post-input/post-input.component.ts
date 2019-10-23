import { SearchPosts } from './../../../actions/post.actions';
import { State } from './../../../reducer/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducer/state';
import { FetchPosts } from 'src/app/actions/post.actions';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {

  constructor(public store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  onInputChange(value) {
    this.store.dispatch(new SearchPosts(value));
  }

}
