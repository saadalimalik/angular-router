import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products',
    },
    {
        path: 'first',
        component: FirstComponent,
    },
    {
        path: 'second',
        component: SecondComponent,
    },
    {
        path: 'contact/us',
        component: ContactComponent,
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductsListComponent,
            },
            {
                path: ':id',
                component: ProductDetailsComponent,
            },
        ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
