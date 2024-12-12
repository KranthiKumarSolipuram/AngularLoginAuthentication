import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product-model';
// import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  products: IProduct[] = []; // Initialize with an empty array
  subscription!: Subscription;
//   userId !: string | null;

  constructor(private productService: HttpService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.userId=this.activatedRoute.snapshot.queryParamMap.get("userId");
    this.loadProducts();
    // console.log(this.userId);

    // this.activatedRoute.queryParamMap.subscribe(params => {
    //     this.userId = params.get('userId'); // Get the 'userId' from query parameters
    //     this.loadProducts(); // Reload products whenever the userId changes
    //     console.log('Current userId:', this.userId);
    //   });
  }

  loadProducts() {
    let url="";
    // if(this.userId){
    //      url = "https://fakestoreapi.com/products?userId="+this.userId;
    // }else{
    //     url ="https://fakestoreapi.com/products"
    // }
    // Make the API call to fetch products
    this.subscription = this.productService.getData("https://fakestoreapi.com/products").subscribe({
        next :(data : any) =>{
            // this.products=data as IProduct[]; 
            // console.log(this.products);
            if (Array.isArray(data)) {
                this.products = data as IProduct[];
              } else {
                this.products = [data] as IProduct[]; // Wrap single object in an array
              }
      },
      error: (error) => {
        console.error("Error fetching products:", error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
