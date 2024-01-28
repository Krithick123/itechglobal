
import { Component} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-happ-customers',
  templateUrl: './happ-customers.component.html',
  styleUrl: './happ-customers.component.css'
})
export class HappCustomersComponent{

  item:Data={
    title:"Happy Customers",
    subtitle:"Diverse Verticals. Award Winning Services",
    description:"Customer experience is why we exist, and it's why we do the things we do. When you establish customer centricity as the reason for your existence and growth, then it becomes ingrained in your culture, in your ethos, in everything that you do. It has been our privilege to work with some of the biggest names in industry."
  }
images =  [
  {image: '../../assets/images/2.jpg',
  description: 'Helped one of India largest universities to move classes online, as well as efficiently share notes and collaborate in a secure and efficient manner. This feat was accomplished in just five days, enabling thousands of students to resume their education'},
  {image: '../../assets/images/3.jpg',
  description: 'Helped one of India largest universities to move classes online, as well as efficiently share notes and collaborate in a secure and efficient manner. This feat was accomplished in just five days, enabling thousands of students to resume their education'},
  {image: '../../assets/images/4.jpg',
  description: 'Helped one of India largest universities to move classes online, as well as efficiently share notes and collaborate in a secure and efficient manner. This feat was accomplished in just five days, enabling thousands of students to resume their education'},
  {image: '../../assets/images/7.jpg',
  description: 'Helped one of India largest universities to move classes online, as well as efficiently share notes and collaborate in a secure and efficient manner. This feat was accomplished in just five days, enabling thousands of students to resume their education'},
  {image: '../../assets/images/10.jpg',
  description: 'Helped one of India largest universities to move classes online, as well as efficiently share notes and collaborate in a secure and efficient manner. This feat was accomplished in just five days, enabling thousands of students to resume their education'},
]; 

constructor() {
}
customOptions: OwlOptions = {
  loop: true,
  margin:20,
  animateIn:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  dotsEach:true,
  navSpeed: 600,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>;'],
  responsive: {
    0: {
      items: 1 
    },
    400: {
      items: 1
    },
    760: {
      items: 2
    },
    1000: {
      items: 3
    }
  },
  nav: true
}

}
interface Data{
  title:string;
  subtitle:string;
  description:string
}
