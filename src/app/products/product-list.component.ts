import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';
  products: IProduct[] = [];
  filteredProduct: IProduct[] = [];

  constructor(public productService: ProductService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProduct = this.performFilter(value);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProduct = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private performFilter(value: string): IProduct[] {
    const filterBy = value.toLocaleLowerCase().trim();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().trim().includes(filterBy)
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
