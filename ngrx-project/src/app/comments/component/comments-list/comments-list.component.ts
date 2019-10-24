import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/reducer/state';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  private comments$: Observable<Comment[]>;

  constructor(private store: Store<State>) { 
    this.comments$ = store.select()
  }

  ngOnInit() {
  }


}
