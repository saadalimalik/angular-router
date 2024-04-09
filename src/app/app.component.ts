import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterModule, ContactModule, ProductsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'router-app';

    constructor(private router: Router) {}

    goToContact() {
        this.router.navigate(['contact', 'us']);
    }
}
