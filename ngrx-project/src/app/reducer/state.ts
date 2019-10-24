import { PostState } from './state';
import { Post } from 'src/app/model/Post';
import { createSelector } from '@ngrx/store';
import { CommentStmt } from '@angular/compiler';

export interface PostState {
    posts: Post[];
}

export interface CommentState {
    comments: Comment[];
}

export interface State {
    postState: PostState;
    commentState: CommentState;
}


export const selectPostState = (state: State) => state.postState;
export const getPosts = createSelector(selectPostState, (state) => { console.log(state); return state.posts; });

export const selectCommentState = (state: State) => state.commentState;
export const getComments = createSelector(selectCommentState, (state) => { console.log(state); return state.comments; });
