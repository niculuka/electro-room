import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.css']
})
export class AdminProductUpdateComponent implements OnInit, OnDestroy {

  protected product: Product = new Product();
  foundProduct: boolean = false;

  currentIndexTab: number = this.getCurrentIndex();

  private sub0: any;
  private sub1: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private adminProductService: AdminProductService,
  ) { }

  ngOnInit(): void {
    this.sub0 = this.activatedRoute.paramMap.subscribe((params) => {
      let urlKey = params.get('urlKey') || "";
      this.sub1 = this.productService.getProductByNameService(urlKey).subscribe(data => {
        if (data) {
          this.product = data;
          this.adminProductService.setProductService(this.product)
          this.foundProduct = true;
        }
        else this.foundProduct = false;
      });
    });
  }

  setCurrentIndex(event: any) {
    localStorage.setItem("currentIndexTab", event);
  }

  private getCurrentIndex() {
    const currIndex = localStorage.getItem("currentIndexTab");
    return currIndex ? JSON.parse(currIndex) : 0;
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
  }
}
