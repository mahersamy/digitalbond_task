import { Component, HostListener, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: 'HOME', path: '/', fragment: 'hero' },
    { label: 'ABOUT', path: '/', fragment: 'about' },
    { label: 'SERVICES', path: '/', fragment: 'services' },
    { label: 'CAREERS', path: '/', fragment: 'careers' },
    { label: 'SAY HELLO', path: '/', fragment: 'contact' },
  ];

  socialLinks = [
    { icon: 'fa-brands fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fa-brands fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fa-brands fa-linkedin-in', url: '#', label: 'LinkedIn' },
    { icon: 'fa-brands fa-whatsapp', url: '#', label: 'WhatsApp' },
    { icon: 'fa-brands fa-tiktok', url: '#', label: 'TikTok' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }
}
