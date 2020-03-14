import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgDirective } from './error-msg.directive';
import { FilesizePipe } from './filesize.pipe';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about/about.component';
import { GroupComponent } from './group/group.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgDirective,
    FilesizePipe,
    ProductlistComponent,
    ProductDetailsComponent,
    ContactComponent,
    AboutComponent,
    GroupComponent,
    ProductcreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
