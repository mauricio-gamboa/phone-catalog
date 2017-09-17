import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';

import { State } from '../reducers'
import * as phones from '../actions';

import { PhoneServices } from '../services';

@Injectable()
export class PhonesEffects {
    constructor(
        private actions: Actions,
        private store: Store<State>,
        private phoneServices: PhoneServices
    ) { }

    @Effect() navigateToPhones = this.handleNavigation('phones', (
        r: ActivatedRouteSnapshot, state: State
    ) => {
        return this.phoneServices.findPhones()
            .map(res => ({
                type: phones.LOAD_SUCCESS,
                payload: res
            }));
    });

    private handleNavigation(
        segment: string,
        callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>
    ) {
        const nav = this.actions.ofType(ROUTER_NAVIGATION).
            map(firstSegment).
            filter(s => s.routeConfig.path === segment);

        return nav.withLatestFrom(this.store)
            .switchMap(a => callback(a[0], a[1]))
            .catch(e => {
                console.log('Network error', e);
                return of();
            });
    }
}

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}