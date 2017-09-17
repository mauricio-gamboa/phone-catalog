import { Component, Input } from '@angular/core';
import { Phone } from '../../models';

@Component({
    selector: 'phones-cmp',
    templateUrl: './phones.component.html'
})

export class PhonesComponent {
    @Input() phones: Phone[];
    @Input() loaded: boolean;
}