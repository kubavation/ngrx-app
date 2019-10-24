import { CommentActionTypes } from './../shared/enum/CommentActionTypes.enum';
import { Action } from '@ngrx/store';
import { Post } from './../model/Post';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { ActionParent } from './action.parent';

export class FindComments implements ActionParent {
    type = CommentActionTypes.FIND;
    constructor(public payload: number) {}
}

export class FindCommentsSuccess implements ActionParent {
    type = CommentActionTypes.FIND_SUCCESS;
    constructor(public payload: Comment[]) {}
}