import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="categories-container">
      <h1>Категории</h1>
      <div class="category-card" *ngFor="let category of categories" (click)="goToCategory(category.name)">
        <img [src]="category.image" alt="{{ category.name }}">
        <h2>{{ category.name }}</h2>
      </div>
    </div>
  `,
  styles: [`
    .categories-container {
      text-align: center;
    }
    .category-card {
      display: inline-block;
      width: 200px;
      cursor: pointer;
      margin: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;
      text-align: center;
    }
    .category-card img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  `]
})
export class CategoriesComponent {
  categories = [
    { name: 'Сумки', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8XV28zwLCEAY1EFzY7kteqP7ns9sivFQfoI40gQRripqB78S1KR7_fuvKWEJUfVHFzTv1Z6R6cdPYjq2Tdsw3LMFxVZHpZ39r5vbXlN0qQdMNSnny7UnUaKa-ZH4eBkXJWZQCzqrjX4I&usqp=CAc' },
    { name: 'ПК', image: 'https://gamingpc.com.ua/image/cache/blog/be71a81892a460bb8ec734b332905573-1452x679.webp' },
    { name: 'Роутеры', image: 'https://idpkz.kz/upload/images/27406_695517_21.jpg' },
    { name: 'Прочее', image: 'https://idpkz.kz/upload/images/27406_695517_21.jpg' }
  ];

  constructor(private router: Router) { }

  goToCategory(categoryName: string) {
    this.router.navigate(['/category', categoryName]);
  }
}
