import { Component, ViewChild, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { Slide } from "./carousel/carousel.interface";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(CarouselComponent, { static: true }) carousel: CarouselComponent;
  slides : Slide[]= [
    {src: '/assets/img1.jpg'},
    {src: '/assets/img2.jpg'},
    {src: '/assets/img3.jpg'},
    {src: '/assets/img4.jpg'}
    ];
  title = 'slideshow';
}
