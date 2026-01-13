import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RestaurantMenu } from './restaurant-menu/restaurant-menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NgOptimizedImage, RestaurantMenu]
})
export class App {
  title = 'Carpediem Food';
  logoPath = 'assets/carpediem-food-logo.png';
}
