import { Post } from 'src/app/model/Post';

export interface State {
    posts: Post[];
}

export const getPosts = (state: any) => state.postReducer.posts; //todo refactor multiple reducers
