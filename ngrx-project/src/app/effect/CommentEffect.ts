import { FindComments, FindCommentsSuccess } from './../actions/comment.action';
import { CommentActionTypes } from './../shared/enum/CommentActionTypes.enum';
import { PostsUpdated, SearchPosts, AddPost, PostsAddedSuccess, PostsAddedFailure } from './../actions/post.actions';
import { Post } from './../model/Post';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { FetchPosts } from 'src/app/actions/post.actions';
import { PostService } from './../posts/service/post.service';
import { State } from './../reducer/state';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, map, tap, debounceTime, filter, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class CommentEffect {

    constructor(private actions$: Actions,
                private store: Store<State>,
                private postService: PostService) { }


    @Effect()
    loadComments$: Observable<Action> = this.actions$.pipe(
        ofType(CommentActionTypes.FIND),
        tap(r => console.log('in load comment effect ', r)),
        switchMap(
            (action: FindComments) => this.postService.findAllCommentsByPost(action.payload).pipe(
                map(result => new FindCommentsSuccess(result))
            )
        )
    );

}
