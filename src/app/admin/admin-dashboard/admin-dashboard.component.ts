import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    // let token = localStorage.getItem("token") as string;
    // var decoded =jwt_decode(token);
    // console.log(decoded);
  }
}
