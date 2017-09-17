import { Component, Input } from '@angular/core';
import { Phone } from '../../models';

@Component({
    selector: 'phone-cmp',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.css']
})

export class PhoneComponent {
    @Input() phone: Phone;
}