import { Product } from './components/product.types';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// products
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.css']
})
export class ProductsPage implements OnInit {

  products: Observable<Product[]> = this.svc.products;
  
  constructor(public svc: ProductService) { }

  ngOnInit(): void {
  }

}
