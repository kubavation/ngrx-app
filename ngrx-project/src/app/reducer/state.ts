import { Post } from 'src/app/model/Post';


export interface PostState {
    posts: Post[];
}

export interface State {
    //posts: Post[];
    postState: PostState;
}


export const getPosts = (state: any) => { console.log(state.postReducer.posts); return state.postReducer.posts;} //todo refactor multiple reducers
