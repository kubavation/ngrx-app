import { State, PostState } from './state';
import { ActionParent } from './../actions/action.parent';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { Post } from './../model/Post';

export const initialState: State = {
    postState: {
        posts: []
    },
    commentState: {
        comments: []
    }
};

export function PostReducer(state = initialState.postState, action: ActionParent): PostState {

    switch (action.type) {
        // case PostActionTypes.ADD:
        //     console.log('in add type')
        //     return {
        //         posts: [...state.posts, action.payload]
        //     };
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
            console.log('in fetch')
            return {
                posts: [...state.posts]
            };
        case PostActionTypes.SEARCH:
            console.log('in search');
            return {
                posts: [...state.posts]
            };
        case PostActionTypes.UPDATED:
            return {
                posts: [...action.payload]
            };
        case PostActionTypes.ADD_SUCCESS:
            return {
                posts: [action.payload, ...state.posts]
            };
        case PostActionTypes.ADD_FAILURE:
            return {
                posts: [...state.posts]
            };
        default:
            console.log('in default')
            return {
                    posts: [...state.posts]
            };
    }
}
