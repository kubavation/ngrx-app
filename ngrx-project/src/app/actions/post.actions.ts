import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { ActionParent } from './action.parent';

export class AddPost implements ActionParent {
    type: PostActionTypes.ADD;
    constructor(public payload: any) {}
}

//todo