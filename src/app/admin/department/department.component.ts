import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDepartment } from './department.model';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit,OnDestroy{

    posts = [] as IDepartment[];
    subscription!: Subscription;
    userId !: string | null;

    constructor(private http:HttpService,private activatedRoute: ActivatedRoute){}
    ngOnInit(): void {
        this.userId=this.activatedRoute.snapshot.queryParamMap.get("userId");
        this.loadPosts();
        console.log(this.userId);

    }
    
    loadPosts(){
      let url="";
      if(this.userId){
           url = "https://jsonplaceholder.typicode.com/posts?userId="+this.userId;
      }else{
          url ="https://jsonplaceholder.typicode.com/posts"
      }
        this.subscription = this.http.getData(url).subscribe({
            next : (data: any) =>{
              // console.log(data);
              // this.posts = data as IDepartment[];
              if (Array.isArray(data)) {
                this.posts = data as IDepartment[];
              } else {
                this.posts = [data] as IDepartment[]; // Wrap single object in an array
              }
            },
            error : reason => console.log(reason)
        });
    }

    ngOnDestroy(): void {
        if(this.subscription){
          this.subscription.unsubscribe();
        }
    }
}
