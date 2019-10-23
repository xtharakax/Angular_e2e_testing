import {Component} from '@angular/core';

@Component({
  selector: 'ts-products',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  product_title: string = 'Cambio Products';
  product_name: string = '';
  product_amount: string = '';
  product_array: Array<String> = new Array();

  onAddProduct() {
    this.product_array.push(this.product_name + ' : ' + this.product_amount);
    this.clear();
    //console.log(this.product_array+" : "+this.product_amount);
  }

  private clear() {
    this.product_name = '';
    this.product_amount = '';
  }
}
