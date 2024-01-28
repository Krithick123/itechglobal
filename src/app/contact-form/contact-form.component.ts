import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  item:Data={
    title:"Get in touch",
    subtitle:"Nothing excites us more than a customer conversation",
    description:"We would love to work with you. Please fill up this short form and we will be in touch with you."
  }
  contactForm=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(6)]),
    lastName:new FormControl('',[Validators.required,Validators.maxLength(12)]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]),
    contactNum:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    message:new FormControl('',[Validators.required])
  })
  get firstName(){
    return this.contactForm.get('firstName');
  }
  get lastName(){
    return this.contactForm.get('lastName');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get contactNum(){
    return this.contactForm.get('contactNum');
  }
  get message(){
    return this.contactForm.get('message');
  }
  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
interface Data{
  title: string;
  subtitle?: string; 
  description: string;
}