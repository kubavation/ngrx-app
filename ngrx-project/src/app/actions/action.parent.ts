import {Action} from '@ngrx/store'

export class ActionParent implements Action {
    type: string;
    payload: any;
}