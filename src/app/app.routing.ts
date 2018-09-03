import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Import Components

import{BookComponent} from "./book/book.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const appRoutes: Routes =[
    {path:"", component: BookComponent},
    {path:"about", component: AboutComponent},
    {path:"contact", component: ContactComponent},
    {path:"**", component: BookComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);