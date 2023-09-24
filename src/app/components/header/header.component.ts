import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

const burgerButtonAmimation = trigger('burgerButtonAmimation', [
  state(
    'open',
    style({
      'background-image': 'url(/assets/img/close.png)',
    })
  ),
  state(
    'close',
    style({
      'background-image': 'url(/assets/img/burger-menu.png)',
    })
  ),
  transition('open => close', [
    animate(
      '250ms ease-in',
      keyframes([
        style({
          backgroundImage: 'url(/assets/img/transition_3.png)',
          offset: 0,
        }),
        style({
          backgroundImage: 'url(/assets/img/transition_2.png)',
          offset: 0.33,
        }),
        style({
          backgroundImage: 'url(/assets/img/transition_1.png)',
          offset: 0.66,
        }),
        style({
          backgroundImage: 'url(/assets/img/close.png)',
          offset: 1,
        }),
      ])
    ),
  ]),
  transition('close => open', [
    animate(
      '250ms ease-in',
      keyframes([
        style({
          backgroundImage: 'url(/assets/img/transition_1.png)',
          offset: 0,
        }),
        style({
          backgroundImage: 'url(/assets/img/transition_2.png)',
          offset: 0.33,
        }),
        style({
          backgroundImage: 'url(/assets/img/transition_3  .png)',
          offset: 0.66,
        }),
        style({
          backgroundImage: 'url(/assets/img/close.png)',
          offset: 1,
        }),
      ])
    ),
  ]),
]);

const navAnimation = trigger('navAnimation', [
  state(
    'open',
    style({
      bottom: '0%',
    })
  ),
  state(
    'close',
    style({
      bottom: '-100%',
    })
  ),
  transition('close => open', [animate('500ms ease-in')]),
  transition('open => close', [animate('500ms ease-in')]),
]);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [burgerButtonAmimation, navAnimation],
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private activeRoute: ActivatedRoute) {}
  // ngOnInit(): void {
  //   this.activeRoute.fragment.subscribe((value) => {
  //     this.scrollTo(value);
  //   });
  // }

  clickedMenuItem(delay: number) {
    setTimeout(() => {
      this.activeRoute.fragment.subscribe((value) => {
        this.scrollTo(value);
        this.isMenuOpen = false;
      });
    }, delay);
  }

  scrollTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleAnimation() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
