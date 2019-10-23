import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product_details/product_details.componet';


const routes: Routes = [
  {
    path:"",
    component:ProductComponent
  },
  {
    path:"prod",
    component:ProductComponent
  },
  {
    path:"prodDetail",
    component:ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
