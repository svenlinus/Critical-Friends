
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const banner = document.getElementById("banner");
    if(banner) banner.style.display = "none";
  }


  ngOnInit(): void {
    const banner = document.getElementById("banner");
    if(banner) banner.style.display = "none";
  }
}
