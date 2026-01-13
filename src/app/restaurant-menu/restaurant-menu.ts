import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  imports: [],
  templateUrl: './restaurant-menu.html',
  styleUrl: './restaurant-menu.css',
})
export class RestaurantMenu {
  dishes = [
    { name: 'Pizza Margherita', description: 'Classic pizza with tomatoes, mozzarella, and basil.', imageUrl: 'public/margherita-pizza.jpg' },
    { name: 'Grilled Salmo', description: 'Grilled salmon with lemon and dill.', imageUrl: 'public/grilled-salmon.jpg' }, 
    { name: 'Baked Lasagna', description: 'Creamy pasta with pancetta, eggs, and cheese.', imageUrl: 'public/baked-lasagna.jpg' }
  ];
}
