import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { RatingModule } from 'ngx-bootstrap/rating';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgfordirectiveComponent } from './ngfordirective/ngfordirective.component';
import { RoutingComponent } from './routing/routing.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModelComponent } from './routing/model/model.component';
import { HeaderComponent } from './routing/header/header.component';
import { CardsComponent } from './routing/cards/cards.component';
import { HomeComponent } from './routing/home/home.component';
import { ProductsComponent } from './routing/products/products.component';
import { ServicesComponent } from './routing/service/services.component';
import { ContactComponent } from './routing/contact/contact.component';


const myroutes:Routes=[
  {path:'', component : HomeComponent},
  {path:'product', component : ProductsComponent},
  {path:'service', component : ServicesComponent},
  {path:'contact', component : ContactComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MycontainerComponent,
    NgfordirectiveComponent,
    RoutingComponent,
    ModelComponent,
    HeaderComponent,
    CardsComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(myroutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
