import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logOut: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  logIn() {
    console.log("Inicio de Sesión")
    this.logOut = !this.logOut;
  }
}
