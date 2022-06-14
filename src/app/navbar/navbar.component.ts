import { AppComponent } from './../app.component';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  screenWidth = AppComponent.screenWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {this.screenWidth = AppComponent.screenWidth;}

  ngOnInit(): void {
  }
}
