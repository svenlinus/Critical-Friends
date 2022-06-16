import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'critical-friends';
  sw = 1000;
  public static screenWidth = window.innerWidth;

  constructor() {
    document.body.style.height = "auto";
    document.body.style.display = "block";
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  onResize() {
    AppComponent.screenWidth = window.innerWidth;
    this.sw = AppComponent.screenWidth
    let mainBtn = (document.querySelector('.main-btn') as HTMLElement);
    if(!mainBtn) return;
    if(AppComponent.screenWidth < 800) {
      mainBtn.style.fontSize = "10pt";
      mainBtn.style.padding = "0.5rem";
    } else {
      mainBtn.style.fontSize = "2em";
      mainBtn.style.padding = "1rem 1.5rem";
    }
  }
}
