import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-patnerships',
  templateUrl: './patnerships.component.html',
  styleUrl: './patnerships.component.css'
})
export class PatnershipsComponent {
  item:Data={
    title:"Partnerships",
    subtitle:"Technology neutral, vendor agnostic solutions",
    description:"We like to think of ourselves not as a technology company, but instead as a customer-focused company that leverages technology to deliver business results. Thus, when it comes to delivering a technology solution, we don’t begin with technology. Instead, we start by visualizing the customer experience and their business needs, and then arrive at a technology stack that delivers this experience."
  }
  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    animateIn:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsEach:true,
    navSpeed: 600,
    autoplay:true,
    autoplaySpeed:2000,
    autoplayTimeout:3000,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      },
      1000: {
        items: 6
      }
    },
  }
  images=[
    {
    image:"../../assets/images/p1.png",
    cmpName:"MicroSoft"
    },
    {
      image:"../../assets/images/p2.png",
      cmpName:"Amazon"
    },
    {
      image:"../../assets/images/p3.png",
      cmpName:"Tesla"
    },
    {
      image:"../../assets/images/p4.png",
      cmpName:"Meta"
    }
    ,
    {
      image:"../../assets/images/p5.png",
      cmpName:"Google"
    },
    {
      image:"../../assets/images/p6.png",
      cmpName:"Apple"
    },
    {
      image:"../../assets/images/p7.png",
      cmpName:"Amazon"
    }
]
}
interface Data{
  title: string;
  subtitle?: string; 
  description: string;
}
