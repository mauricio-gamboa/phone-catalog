import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../../models';
import { State } from '../../reducers'
import { Store } from '@ngrx/store';

@Component({
    selector: 'phones-container-cmp',
    templateUrl: './phones-container.component.html'
})

export class PhonesContainerComponent {
    phones: Phone[];
    loaded: boolean;

    constructor(private store: Store<State>) {
        store.select('app').subscribe(s => {
            this.phones = s.phones;
            this.loaded = s.loaded;
        });
    }
}
