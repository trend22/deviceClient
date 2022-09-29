import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import {AuthModule} from './auth/auth.module';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {AppRoutingModule} from './app-routing.module'
import {MaterialModule} from '../material.module';
import { HomeComponent } from './pages/home/home.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';


@NgModule({
    imports:      [ BrowserModule, FormsModule, AuthModule, AuthRoutingModule, AppRoutingModule, MaterialModule, HttpClientModule ],
    declarations: [ AppComponent, HomeComponent ],
    providers: [ AuthService,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: AuthInterseptor,
        //   multi: true,
        // },
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }