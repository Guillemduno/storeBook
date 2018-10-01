import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import {routing, appRoutingProviders} from "./app.routing";

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { CartShopComponent } from './cart-shop/cart-shop.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DescriptionComponent,
    CartShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
