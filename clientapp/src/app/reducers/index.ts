import * as phones from '../actions';
import { Phone } from '../models';

export type AppState = {
    phones: Phone[],
    loaded: boolean
};

export type State = { app: AppState };

export const initialState: State = {
    app: {
        phones: [],
        loaded: false
    }
};

export function appReducer(state: AppState, action: phones.Actions): AppState {
    switch (action.type) {

        case phones.LOAD_SUCCESS: {
            return {
                loaded: true,
                phones: action.payload
            };
        }

        case phones.LOAD_FAIL: {
            return {
                loaded: false,
                phones: []
            };
        }

        default: {
            return state;
        }
    }
}