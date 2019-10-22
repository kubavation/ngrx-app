import { AddPost } from './../actions/post.actions';
import { ActionParent } from './../actions/action.parent';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { Post } from './../model/Post';

export const initialState: Post[] = [];

export function PostReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        case PostActionTypes.ADD:
            return [...state, action.payload];
        case PostActionTypes.REMOVE:
            return [...state.splice(state.findIndex(p => p.id === action.payload), 1)];
        case PostActionTypes.UPDATE:
            return [...state.splice(state.findIndex(p => p.id === action.payload.id), 1), action.payload];
        default:
            return state;
    }
}
