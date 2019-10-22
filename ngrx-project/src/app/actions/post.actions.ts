import { Post } from './../model/Post';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { ActionParent } from './action.parent';

export class AddPost implements ActionParent {
    type = PostActionTypes.ADD;
    constructor(public payload: Post) {}
}

export class FetchPosts implements ActionParent {
    type = PostActionTypes.FETCH;
    constructor(public payload: string) {}
}
//todo