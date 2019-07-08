import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AppRoutingModule } from '../app/core/app-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    AgmCoreModule.forRoot({}),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
