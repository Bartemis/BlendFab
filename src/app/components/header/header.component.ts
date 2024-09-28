import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MenubarModule} from "primeng/menubar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    MenubarModule
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Upload', icon: 'pi pi-fw pi-upload', routerLink: '/upload' },
      // Add more menu items as needed
    ];
  }
}
