import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProductsComponent } from '../components/products/products.component';
import { ClientsComponent } from '../components/clients/clients.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
