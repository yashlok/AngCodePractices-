import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../productlist/products.service';
//import { Product } from '../Iproduct';
import { Product } from '../product';
@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
 

  export class ProductcreateComponent implements OnInit {
    errorMessage = "";
    showMessage = false;
    model: Product = new Product();
    productsList: Product[] = [];
    IsEdit:boolean = false;
    btnText = "Submit";
    constructor(private _service: ProductsService) { }
    ngOnInit() {
      this.getProductList();
    }
    getProductList() {
      this._service.getProducts().subscribe(res => {
        this.productsList = res;
        console.log(this.productsList);
      });
    }
    editEmp(item: Product) {
      this.model = null;
      this.IsEdit = true;
      const obj = {
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl
      };
      console.log(obj);
      this.model = Object.assign({}, obj);
      this.btnText = "Update";
    }
    // OnSubmit(form) {
    //   console.log(form);
    //   console.log(form.value);
    // }
    // Save
    OnSubmit(form) {
      console.log(form.value);
      ////case when save is there
      if (!this.IsEdit) {
        this._service.createProduct(form.value)
          .subscribe(data => {
            console.log('Product saved Successfully!!');
            this.showMessage=true;
            this.errorMessage ='Product saved Successfully!!';
            setTimeout(() => {
              this.errorMessage = "";
              this.showMessage=false;
            }, 3000);
            this.getProductList();
            form.reset();
          });
      }
      else   /// update case
      {
        this._service.updateProduct(form.value)
        .subscribe(data => {
          console.log('Product updated Successfully!!');
          this.showMessage=true;
          this.errorMessage ='Product updated Successfully!!';
          setTimeout(() => {
            this.errorMessage = "";
            this.showMessage=false;
          }, 3000);
          this.getProductList();
          this.IsEdit=true;
          this.btnText = "Submit";
          form.reset();
        });
      }
    }
    ///Delete
    deleteEmp(item: Product): void {
      this._service.deleteProduct(item.id)
        .subscribe(data => {
          console.log('Product deleted Successfully!!');
          this.getProductList();
        })
    }
    // // Update
    // OnSubmitUpdate(form) {
  
    // }
  }
  
