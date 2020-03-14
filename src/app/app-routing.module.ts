import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ContactComponent } from './contact/contact.Component';
import { AboutComponent } from './about/about/about.component';
import { GroupComponent } from './group/group.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';

const routes: Routes = [
  { path: '', component: ProductlistComponent },
  
  { path:  'about',component:AboutComponent},
  { path:  'group',component:GroupComponent},
  { path:  'productcreate',component:ProductcreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
