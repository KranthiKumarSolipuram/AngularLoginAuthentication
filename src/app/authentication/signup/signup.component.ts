import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegister } from '../register-model'; // Adjust the path to your interface

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
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
 
  register() {
    this.submitted = true; // Mark the form as submitted
    if (this.signupForm.invalid) {
      // If the form is invalid, stop further processing
      console.log('Form Invalid');
      return;
    }

    // Populate the registerData object with valid form values
    this.registerData = { ...this.signupForm.value };
    console.log('Register Data:', this.registerData);
  }
}
