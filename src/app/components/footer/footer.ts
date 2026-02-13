import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  keywords = [
    'Go Back Home?',
    'Want To Join Us',
    "LET'S TALK",
    'Mobile Apps',
    'SMS Campaigns',
    'Want To Know More About Us',
  ];
}
