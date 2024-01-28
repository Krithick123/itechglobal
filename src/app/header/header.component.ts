import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'I Tech Global Solutions';
  isNavbarCollapsed: boolean = true;
  navItems: NavItem[] = [
    {
      name: 'What we do',
      route: '#whatwedo',
    },
    { name: 'How we engage', route: '#happyCustomers' },
    { name: 'Who we are', route: '#whoweare' },
    { name: 'Work with us', route: '#Contact' },
    { name: 'Partnerships', route: '#partner' },
    { name: 'Contact us', route: '#Contact' },
  ];
}

interface NavItem {
  name: string;
  route: string;
}
