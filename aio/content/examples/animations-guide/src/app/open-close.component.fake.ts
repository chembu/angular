import {Component} from '@angular/core';
import {trigger, transition, state, animate, style, keyframes} from '@angular/animations';

@Component({
  selector: 'open-close-component',
  animations: [
// #docregion trigger
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('open', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      //...
      transition('* => closed', [
        animate('1s', keyframes ( [
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1,   offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
      ])
    ])
// #enddocregion trigger
  ],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css']
})
export class FakeOpenCloseComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
