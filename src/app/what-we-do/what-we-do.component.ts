import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'] 
})
export class WhatWeDoComponent {
  multiSlides:ContentItem[]=[
    {
      image:"../../assets/images/2.jpg",
      title:"Future Ready Enterprise",
      description:"When it comes to predicting the future, the most potent clues come from the past. While electric power led the second industrial revolution, the shift from analog to digital..."
    },
    {
      image:"../../assets/images/7.jpg",
      title:"Centers Of Excellence",
      description:"In a disruptive business environment, we can provide the vital edge to your business with modern, rich cloud productivity tools that can help your employees..."
    },
    {
      image:"../../assets/images/10.jpg",
      title:"Intelligent IP Solutions",
      description:"The need to leverage technology as an integral part of your success has never been as strong as today. Building on our extensive services and domain experience..."
    }
  ]
  item:Data={
    title:"What we do",
    subtitle:"We help build agile and intelligent enterprises",
    description:"I Tech Global Solutions helps you to move away from traditional, discrete IT roll outs to build a business outcome focussed technology backbone backed by continuous managed services that help you to rapidly adopt technology to meet changing customer and market needs."
  }
}
interface Data{
  title: string;
  subtitle?: string; 
  description: string;
}
interface ContentItem {
  image: string;
  title: string;
  description: string;
}