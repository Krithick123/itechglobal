import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent{
sliderData:SlideItem[]=[
  {
      image:"../../assets/images/1.jpg",
      title:"Innovate. Excel. Thrive.",
      description:"Connecting Businesses to Success through IT Excellence"
  },
  {
      image:"../../assets/images/4.jpg",
      title:"Smart Strategies, Seamless Success",
      description:"Driving Your Business Forward with Smart IT Solutions"
  }];

}
interface SlideItem {
  image: string;
  title: string;
  description: string;
}
