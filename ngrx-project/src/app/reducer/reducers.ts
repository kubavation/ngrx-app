import { State, CommentState } from './state';
import { PostReducer } from './post.reducer';
import { CommentReducer } from './comment.reducer';

export const reducers = {
    postState: PostReducer,
    commentState: CommentReducer
};