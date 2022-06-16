import { AppComponent } from './../app.component';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  screenWidth = AppComponent.screenWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {this.screenWidth = AppComponent.screenWidth;}


  ngOnInit(): void {
    const banner = document.getElementById("banner");
    if(banner) banner.style.display = "none";
  }

}
