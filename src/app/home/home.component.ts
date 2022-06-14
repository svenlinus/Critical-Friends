import { AppComponent } from './../app.component';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }

  
  screenWidth = AppComponent.screenWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {this.screenWidth = AppComponent.screenWidth;}

  ngOnInit(): void {
  }

}
