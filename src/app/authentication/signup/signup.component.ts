import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IRegister } from '../register-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    // constructor(private http : HttpService ){}

    registerUser = {} as IRegister;

    register(f:NgForm){

    }
}
