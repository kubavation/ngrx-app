import { Action } from '@ngrx/store';
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

export class RemovePost implements ActionParent {
    type = PostActionTypes.REMOVE;
    constructor(public payload: number) {}
}

export class UpdatePost implements ActionParent {
    type = PostActionTypes.UPDATE;
    constructor(public payload: Post) {}
}

export class PostsUpdated implements ActionParent {
    type = PostActionTypes.UPDATED;
    constructor(public payload: Post[]) {}
}
