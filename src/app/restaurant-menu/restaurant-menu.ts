import { Component } from '@angular/core';
import { DishRecipe } from '../dish-recipe/dish-recipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-restaurant-menu',
  imports: [ DishRecipe,NgOptimizedImage ],
  templateUrl: './restaurant-menu.html',
  styleUrl: './restaurant-menu.css',
})
export class RestaurantMenu {
  dishes = [
    { name: 'Pizza Margherita', description: 'Classic pizza with tomatoes, mozzarella, and basil.', imageUrl: '/assets/margherita-pizza.jpg' },
    { name: 'Grilled Salmo', description: 'Grilled salmon with lemon and dill.', imageUrl: '/assets/grilled-salmon.jpg' }, 
    { name: 'Baked Lasagna', description: 'Creamy pasta with pancetta, eggs, and cheese.', imageUrl: '/assets/baked-lasagna.jpg' }
  ];
}
