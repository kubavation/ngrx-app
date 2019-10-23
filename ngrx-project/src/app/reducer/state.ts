import { Post } from 'src/app/model/Post';


export interface PostState {
    posts: Post[];
}

export interface State {
    //posts: Post[];
    postState: PostState;
}


export const getPosts = (state: State) => { console.log(state); return [];} //todo refactor multiple reducers
