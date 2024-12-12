import { Component, OnDestroy, OnInit } from '@angular/core';
// import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../register-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{

  loginForm!: FormGroup;
  subscription! : Subscription;
  returnUrl!:string | null;
  submitted = false;
    constructor(private fb : FormBuilder, private _authenticationService: AuthenticationService, private router : Router,
     private activatedRoute : ActivatedRoute 
    ){}
    loginUser={} as ILogin;
  ngOnInit(): void {
      // this.loginUser={username:"mor_2314",password:"83r5^_"} //static data not from the form to check if working
      this.returnUrl = this.activatedRoute.snapshot.queryParamMap.get("returnUrl");
      this.loginForm=this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
  }

  login() {
    this.submitted = true;
    
    // if (this.loginForm.invalid) {
    //   console.log('Form is invalid');
    //   return;
    // }

    // console.log('Login Data:', this.loginForm.value);
    this.loginUser=this.loginForm.value;

   this.subscription= this._authenticationService.postData("https://fakestoreapi.com/auth/login",this.loginUser).subscribe({
    next : (data : any) => {
      // console.log(data)
      if(data.token){
        console.log(data);
        localStorage.setItem("token",data.token);
        if(this.returnUrl)
          this.router.navigate([this.returnUrl])
        else
        this.router.navigate(["/admin/products"])
      }
      else{
        console.log(data.error);
      }
    },
    error: reason => console.log(reason),
   });
  }

  ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }

    public loginMethod(){
      //Here we will specify the url
    }
}
