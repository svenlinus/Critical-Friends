import { AppComponent } from './../app.component';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  screenWidth = AppComponent.screenWidth;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = AppComponent.screenWidth;
    const banner = document.getElementById("banner");
    if(banner) banner.style.display = "none";
  }


  ngOnInit(): void {
    const banner = document.getElementById("banner");
    if(banner) banner.style.display = "none";
  }

}
