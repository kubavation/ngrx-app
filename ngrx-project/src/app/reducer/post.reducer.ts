import { State } from './state';
import { ActionParent } from './../actions/action.parent';
import { PostActionTypes } from './../shared/enum/PostActionTypes.enum';
import { Post } from './../model/Post';

// export const initialState: State = {
//     posts: []
// };

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
            console.log('in fetch')
            console.log(state.posts)
            //return state.posts;
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
        default:
            console.log('in default')
            return {
                posts: [...state.posts]
            };
    }
}
