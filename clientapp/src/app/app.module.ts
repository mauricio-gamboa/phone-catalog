import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { PhonesContainerComponent } from './components/phonesContainer/phones-container.component';
import { PhonesComponent } from './components/phones/phones.component';
import { PhoneComponent } from './components/phone/phone.component';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MaterialModule,
    MdProgressBarModule,
    MdExpansionModule,
    MdCardModule
} from '@angular/material';
import { PhoneServices } from './services';
import { appReducer, initialState } from './reducers'
import { PhonesEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
    declarations: [
        AppComponent,
        PhonesContainerComponent,
        PhonesComponent,
        PhoneComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,

        BrowserAnimationsModule,
        MaterialModule,
        MdProgressBarModule,

        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'phones' },
            { path: 'phones', pathMatch: 'full', component: PhonesContainerComponent }
        ], { useHash: true }),

        StoreModule.forRoot(<any>{ app: appReducer }, { initialState }),

        EffectsModule.forRoot([
            PhonesEffects
        ]),

        StoreRouterConnectingModule
    ],
    exports: [RouterModule],
    providers: [
        PhoneServices,
        PhonesEffects
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
