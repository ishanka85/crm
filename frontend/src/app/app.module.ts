import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/login/login.component';
import { MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material'
// AoT requires an exported function for factories


@NgModule({
    declarations: [
        AppComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        OverlayModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        HttpModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
