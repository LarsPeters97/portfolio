import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollToAboutMe() {
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
  }
}
