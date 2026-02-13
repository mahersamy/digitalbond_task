import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ReviewsComponent } from '../../components/reviews/reviews';
import { ContactComponent } from '../../components/contact/contact';
import { FooterComponent } from '../../components/footer/footer';
import { LoadingComponent } from '../../components/loading/loading';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    LoadingComponent,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class LandingComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    // SEO Optimization
    this.title.setTitle('Digital Bond - Creative Agency');
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Digital Bond is a creative agency specializing in branding, web development, mobile apps, and social media marketing. Let's Bond!",
      },
      { name: 'keywords', content: 'digital agency, branding, web development, marketing' },
      { name: 'author', content: 'Digital Bond' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Digital Bond - Creative Agency' },
      { property: 'og:type', content: 'website' },
    ]);
  }
}
