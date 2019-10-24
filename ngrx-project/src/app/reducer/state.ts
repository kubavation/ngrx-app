import { PostState } from './state';
import { Post } from 'src/app/model/Post';
import { createSelector } from '@ngrx/store';
 


export interface PostState {
    posts: Post[];
}

export interface State {
    //posts: Post[];
    postState: PostState;
}


export const selectPostState = (state: State) => state.postState;
export const getPosts = createSelector(selectPostState, (state) => { console.log(state); return state.posts });
