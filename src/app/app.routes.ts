import { Path } from './../../node_modules/@angular/compiler-cli/node_modules/chokidar/esm/handler.d';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandComponent } from './components/brand/brand.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [
  {path:'', component:AuthLayoutComponent,title:'Auth',children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent,title:'Login'},
    {path:'register', component:RegisterComponent,title:'Register'},
  ]},
  {path:'',component:BlankLayoutComponent,title:'blank',children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent,title:'Home'},
    {path:'product', component:ProductComponent,title:'Products'},
    {path:'cart', component:CartComponent,title:'Cart'},
    {path:'categories', component:CategoriesComponent,title:'Categories'},
    {path:'brands', component:BrandComponent,title:'Brands'},
  ]},
  {path:'**', component:NotfoundComponent,title:'Notfound'},
];
