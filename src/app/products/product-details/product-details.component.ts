import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
    product: any = {};

    constructor(
        private store: ProductsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const id = params.get('id');

            if (id) {
                this.store
                    .getProduct(parseInt(id, 10))
                    .subscribe((product) => (this.product = product));
            }
        });
    }
}
