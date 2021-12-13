import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ColorBlockDirective } from './cart-list/color-block.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductListComponent,
    ProductComponent,
    CartListComponent,
    ColorBlockDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
