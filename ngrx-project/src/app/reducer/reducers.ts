import { State } from './state';
import { PostReducer } from './post.reducer';

export const reducers = {
    posts: PostReducer
};

export const getPosts = (state: State) => state.posts;
