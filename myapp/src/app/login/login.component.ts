import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;

  user = {
    email: '',
    password: '',
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    this.submitted = true;
  }
}
