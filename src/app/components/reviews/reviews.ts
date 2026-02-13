import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, CarouselModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class ReviewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  };

  reviews = [
    {
      name: 'Mohamed',
      role: 'Marketing Manager',
      quote:
        'Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing.',
      avatar: 'https://placehold.co/100x100/png?text=M',
      rating: 5,
    },
    {
      name: 'Sarah',
      role: 'CEO, TechStart',
      quote:
        'Digital Bond transformed our online presence. Their team is dedicated, creative, and results-driven.',
      avatar: 'https://placehold.co/100x100/png?text=S',
      rating: 5,
    },
    {
      name: 'Ahmed',
      role: 'Product Owner',
      quote: 'Exceptional quality and speed. The best agency we have worked with in years.',
      avatar: 'https://placehold.co/100x100/png?text=A',
      rating: 4,
    },
  ];
}
