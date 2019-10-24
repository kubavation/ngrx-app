import { CommentActionTypes } from './../shared/enum/CommentActionTypes.enum';
import { CommentState } from './state';
import { initialState } from './post.reducer';
import { ActionParent } from '../actions/action.parent';
import { CommentStmt } from '@angular/compiler';


export function CommentReducer(state = initialState.commentState, action: ActionParent): CommentState {

    switch (action.type) {
        case CommentActionTypes.FIND_SUCCESS:
            return {
                comments: [...action.payload]
            };
        default: 
            return {
                comments: [...state.comments]
            };
    }
}