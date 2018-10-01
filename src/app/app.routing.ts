import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Import Components

import{BookComponent} from "./book/book.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {DescriptionComponent} from "./description/description.component";
import { CartShopComponent } from "./cart-shop/cart-shop.component";

const appRoutes: Routes =[
    {path:"", component: BookComponent},
    {path:"about", component: AboutComponent},
    {path:"contact", component: ContactComponent},
    {path:"description/:isbn", component: DescriptionComponent},
    {path:"cartShop/:isbn", component: CartShopComponent},
    {path:"**", component: BookComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);