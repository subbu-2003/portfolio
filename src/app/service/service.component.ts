import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
services = [
    {
      title: 'Static Website',
      image: '/assets/web.jpg',
      description: 'Modern, responsive websites tailored for your brand.',
      details: [
        'Fast loading and SEO friendly',
        'Responsive for all devices',
        'Easy customization'
      ]
    },
    {
      title: 'Management Software',
      image: '/assets/erp.jpg',
      description: 'Customized software solutions to streamline operations.',
      details: [
        'Inventory & billing management',
        'User-friendly dashboards',
        'Scalable solutions'
      ]
    },
    {
      title: 'Android & iOS Apps',
      image: '/assets/mobile.jpg',
      description: 'Engaging, user-friendly mobile applications.',
      details: [
        'Native & hybrid app development',
        'Cross-platform compatibility',
        'UI/UX optimized designs'
      ]
    },
    {
      title: 'Product Advertisement',
      image: '/assets/ads.jpg',
      description: 'Creative campaigns to boost your product reach.',
      details: [
        'Digital marketing strategies',
        'Branding & awareness',
        'Social media promotions'
      ]
    }
  ];
}
