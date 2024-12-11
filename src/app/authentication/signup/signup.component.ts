import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IRegister } from '../register-model'; // Adjust the path to your interface
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
  signupForm!: FormGroup;
  registerData: IRegister = {
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    },
    phone: ''
  };
  submitted=false;
  constructor(private fb: FormBuilder, private _authenticationService : AuthenticationService, private router : Router) {}
  subscription !: Subscription;

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword : ['',Validators.required],
      phone: ['', [Validators.required]],
      name: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['',Validators.required]
      }),
      address: this.fb.group({
        city: [''],
        street: [''],
        number: [0],
        zipcode: [''],
        geolocation: this.fb.group({
          lat: [''],
          long: ['']
        })
      })
    });
  }
  
  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  register() {
    this.submitted = true; // Mark the form as submitted
  //   if (this.signupForm.invalid) {
  //     // If the form is invalid, stop further processing
  //     console.log('Form Invalid');
  //     return;
  //   }

  //   // Populate the registerData object with valid form values
  //   this.registerData = { ...this.signupForm.value };
  //   console.log('Register Data:', this.registerData);
    this.subscription=this._authenticationService.postData("https://fakestoreapi.com/users",this.registerData).subscribe({
      next:(data : any) => {
        console.log(data);
        if(data.id){
          alert(`Signup successful! Your user ID is: ${data.id}`);

          this.registerData= {} as IRegister;
          this.signupForm.reset();
          this.submitted=false;
          this.router.navigate(["/"]);
        }else{
          alert('Signup successful!');
        }
        
      },
      error:  reason =>{
        console.log(reason);
        alert('There was an error during signup. Please try again.');
      },

    });
  }

  ngOnDestroy(): void {
      if(this.subscription){
         this.subscription.unsubscribe();
      }
  }

}
