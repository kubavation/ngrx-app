import {Action} from '@ngrx/store'

export class ActionParent implements Action {
    readonly type: string;
    payload?: any;
}