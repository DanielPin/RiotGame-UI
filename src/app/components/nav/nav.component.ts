import { Component, OnInit } from '@angular/core';
import { faBars, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../main.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  public faBars = faBars;

  public asideState: string = 'closed';

  constructor(private _mainService: MainService) {}

  ngOnInit(): void {}

  public toggleState(): void {
    this.asideState = this.asideState === 'open' ? 'closed' : 'open';
    this._mainService.hasStateAsideChange.next(this.asideState);
  }

}
