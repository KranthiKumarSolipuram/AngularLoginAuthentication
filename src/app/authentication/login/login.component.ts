import { Component, OnInit } from '@angular/core';
// import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  submitted = false;
    constructor(private fb : FormBuilder){}

  ngOnInit(): void {
      this.loginForm=this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    console.log('Login Data:', this.loginForm.value);
  }

    public loginMethod(){
      //Here we will specify the url
    }
}
