import { Post } from 'src/app/model/Post';

export interface State {
    posts: Post[];
}

export const getPosts = (state: State) => { console.log(state.posts); return state.posts; };
