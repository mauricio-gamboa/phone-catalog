import { Action } from '@ngrx/store';
import { Phone } from '../models';

export const LOAD_SUCCESS = '[Phones] LOAD_SUCCESS';
export const LOAD_FAIL = '[Phones] LOAD_FAIL';

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Phone[]) { }
}

export class LoadFail implements Action {
    readonly type = LOAD_FAIL;

    constructor(public payload: any) { }
}

export type Actions =
    | LoadSuccess
    | LoadFail;