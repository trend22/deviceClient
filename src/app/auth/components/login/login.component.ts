import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('Выполняется процедура Login пользователя');
    // this.authService.login(this.email, this.password);
  }

  isAuth() {
     console.log('Выполняется процедура проверки подлинности пользователя');
    // this.authService.isAuth;
  }

}
