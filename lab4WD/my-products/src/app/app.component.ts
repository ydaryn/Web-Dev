import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-products';
}
