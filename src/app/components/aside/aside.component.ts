import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [
    trigger('asideState', [
      state('open', style({ width: '20%', zIndex: 2 })),
      state('closed', style({ width: '5%', zIndex: 2 })),
      transition('open => closed', animate('0.5s ease-in')),
      transition('closed => open', animate('0.5s ease-out')),
    ]),
  ],
})
export class AsideComponent implements OnInit {

  public asideState: string = 'closed';
  constructor() {}

  ngOnInit(): void {}

  public toggleState(): void {
    this.asideState = this.asideState === 'open' ? 'closed' : 'open';
  }
}
