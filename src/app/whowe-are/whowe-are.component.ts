import { Component } from '@angular/core';

@Component({
  selector: 'app-whowe-are',
  templateUrl: './whowe-are.component.html',
  styleUrl: './whowe-are.component.css'
})
export class WhoweAreComponent {
item:ContentItem={
title:"Who we are",
subtitle:"We connect technology and your business to deliver seamless digital transformation",
description1:"I Tech Global Solutions is a global award-winning cloud infrastructure solutions provider,and a trusted technology advisor to India’s top business houses and brands, helping them to navigate technological change and complexity, while enabling them to connect technology with business outcomes.",
description2:"I Tech Global Solutions deep skills and experience, by harnessing a team that possesses more than 750+ professional IT certifications, combined with innovative services and custom IP solutions have helped over 3,000 customers modernize their businesses.",
}
}
interface ContentItem {
  title: string;
  subtitle?: string; 
  description1: string;
  description2: string;
}
