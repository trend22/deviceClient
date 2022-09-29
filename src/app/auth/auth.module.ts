import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthButtonsComponent
  ],
})
export class AuthModule { }
