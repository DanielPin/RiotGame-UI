import { Component, OnInit } from '@angular/core';
import { faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MainService } from '../main.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [
    trigger('display', [
      state('open', style({ display: 'block' })),
      state('closed', style({ display: 'none' })),
      transition('open => closed', animate('0.0s')),
      transition('closed => open', animate('0.0s')),
    ]),
    trigger('asideState', [
      state('open', style({ width: '13%', zIndex: 0 })),
      state('closed', style({ width: '0', zIndex: 0 })),
      transition('open => closed', animate('0.5s ease-in')),
      transition('closed => open', animate('0.5s ease-out')),
    ]),
  ],
})
export class AsideComponent implements OnInit {
  public faFaceSmileBeam = faFaceSmileBeam;

  public asideState: string = 'closed';

  constructor(private _mainService: MainService) {}

  ngOnInit(): void {
    this._mainService.hasStateAsideChange.subscribe((state) => {
      this.asideState = state;
    });
  }
}
