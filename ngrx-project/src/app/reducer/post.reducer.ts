import { State } from './state';
import { AddPost } from './../actions/post.actions';
import { ActionParent } from './../actions/action.parent';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { Post } from './../model/Post';

export const initialState: State = {
    posts: []
};

export function PostReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        case PostActionTypes.ADD:
            return {
                posts: [...state.posts, action.payload]
            };
        case PostActionTypes.REMOVE:
            return {
                posts: [...state.posts.splice(
                    state.posts.findIndex(p => p.id === action.payload), 1)
                ]
            };
        case PostActionTypes.UPDATE:
            return {
                posts: [...state.posts.splice(
                    state.posts.findIndex(p => p.id === action.payload.id), 1), action.payload]
            };
        case PostActionTypes.FETCH:
            return state;
        default:
            return state;
    }
}
