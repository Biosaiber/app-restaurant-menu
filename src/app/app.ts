import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NgOptimizedImage]
})
export class App {
  title = 'Carpediem Restaurant';
  logoPath = 'assets/carpediem-food-logo.png';
}
