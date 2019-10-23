import { PostsUpdated } from './../actions/post.actions';
import { Post } from './../model/Post';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { FetchPosts } from 'src/app/actions/post.actions';
import { PostService } from './../posts/service/post.service';
import { State } from './../reducer/state';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map, tap, debounceTime } from 'rxjs/operators';

@Injectable()
export class PostEffects {

    constructor(private actions$: Actions,
                private store: Store<State>,
                private postService: PostService) { }


    @Effect()
    loadPosts$: Observable<Action> = this.actions$.pipe(
        tap(r => console.log('in load post effect ', r)),
        ofType(PostActionTypes.FETCH),
        debounceTime(800),
        switchMap(
            () => this.postService.findAll().pipe(
                map(result => new PostsUpdated(result))
            )
        )
    );


}

