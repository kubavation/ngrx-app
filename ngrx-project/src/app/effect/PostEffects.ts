import { PostsUpdated, SearchPosts } from './../actions/post.actions';
import { Post } from './../model/Post';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { FetchPosts } from 'src/app/actions/post.actions';
import { PostService } from './../posts/service/post.service';
import { State } from './../reducer/state';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map, tap, debounceTime, filter } from 'rxjs/operators';

@Injectable()
export class PostEffects {

    constructor(private actions$: Actions,
                private store: Store<State>,
                private postService: PostService) { }


    @Effect()
    loadPosts$: Observable<Action> = this.actions$.pipe(
        ofType(PostActionTypes.FETCH),
        tap(r => console.log('in load post effect ', r)),
        switchMap(
            () => this.postService.findAll().pipe(
                tap(s => console.log(s)),
                map(result => new PostsUpdated(result))
            )
        )
    );

    @Effect()
    searchPosts$: Observable<Action> = this.actions$.pipe(
        ofType(PostActionTypes.SEARCH),
        tap(r => console.log('in search post effect ', r)),
        debounceTime(800),
        switchMap(
            (action: SearchPosts) => this.postService.findAll().pipe(
                map(res => res.filter(p => p.title.includes(action.payload))),
                map(result => new PostsUpdated(result))
            )
        )
    );


}

