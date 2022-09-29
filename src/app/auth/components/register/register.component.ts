import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 user: User = {
    email: '',
    username: '',
    password: '',
    password2: '',
  };
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // isAuth() {
  //    console.log('Выполняется процедура проверки подлинности пользователя');
  //   // this.authService.isAuth;
  // }

   registration(): void {
    console.log('Выполняется процедура Registration пользователя');

    const data = {
          email: this.user.email,
          username: this.user.username,
          password: this.user.password,
          password2: this.user.password2,
    }

    if (this.user.email && this.user.password && this.user.password2) {
      this.authService.createUser(data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    }
    // this.authService.login(this.email, this.password);
  }

}
