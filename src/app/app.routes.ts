import { Routes } from '@angular/router';
import { LoginComponent } from './page/admin/login/login.component';
import { LayoutComponent } from './page/admin/layout/layout.component';
import { ProductsComponent } from './page/admin/products/products.component';
import { CategoryProductsComponent } from './page/website/category-products/category-products.component';
import { CategoriesComponent } from './page/admin/categories/categories.component';
import { LandingComponent } from './page/website/landing/landing.component';
import { CustomerComponent } from './page/admin/customer/customer.component';
import { WebsiteProductsComponent } from './page/website/website-products/website-products.component';

export const routes: Routes = [
    {
        path : '' , 
        redirectTo : 'ShoppingBasket',
        pathMatch : 'full'
    },
    {
        path : 'login',
        component: LoginComponent
    },
    {
        path : '' , 
        component: LandingComponent,
        children : [
            {
                path : 'ShoppingBasket',
                component: WebsiteProductsComponent
            },
            {
                path : 'products/:id',
                component: CategoryProductsComponent
            }
        ]
    },
    {
        path : '' , 
        component: LayoutComponent,
        children : [
            {
                path : 'products',
                component : ProductsComponent
            },
            {
                path : 'category',
                component: CategoriesComponent 
            },
            {
                path : 'customer',
                component: CustomerComponent 
            }
        ]
    }
];
