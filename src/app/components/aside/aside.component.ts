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
    trigger('asideState', [
      state('open', style({ width: '15%', zIndex: 2 })),
      state('closed', style({ width: '5%', zIndex: 2 })),
      transition('open => closed', animate('0.5s ease-in')),
      transition('closed => open', animate('0.5s ease-out')),
    ]),
    trigger('asideChildrenState', [
      state('open', style({ width: '10%', zIndex: 2 })),
      state('closed', style({ width: '0%', zIndex: 2  })),
      transition('open => closed', animate('0.5s ease-in')),
      transition('closed => open', animate('0.5s ease-out')),
    ]),
  ],

})
export class AsideComponent implements OnInit {

  public faFaceSmileBeam = faFaceSmileBeam;

  public asideState: string = 'closed';
  public asideChildrenState: string = 'closed';

  constructor(
    private _mainService: MainService
  ) {}

  ngOnInit(): void {
    this._mainService.hasStateAsideChange.subscribe((state)=>{
      this.asideState = state;
      this.asideChildrenState = state;
    });
  }


}
