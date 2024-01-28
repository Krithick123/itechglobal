import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
item:Data={
  title:"I Tech Global Solutions",
  subTitle:"Connecting Businesses to Success through IT Excellence",
  description:"Strategic IT for Sustainable Growth",
  location:"Coimbatore, Tamil Nadu,India",
  mailId:"Parthiban.Rangaraj@outlook.com",
  contactNum:"+91 98942 15407"
}
openingHours:Hours[]=[
  {day:"Monday",time:"9am - 5pm"},
  {day:"Tuesday",time:"9am - 5pm"},
  {day:"Wednesday",time:"9am - 5pm"},
  {day:"Thursday",time:"9am - 5pm"},
  {day:"Friday",time:"9am - 5pm"},
  {day:"Sat - Sun",time:"Close"},
]
}
interface Data{
  title:string,
  subTitle:string,
  description:string,
  location:string,
  mailId:string,
  contactNum:string
}
interface Hours{
  day:string,
  time:string
}