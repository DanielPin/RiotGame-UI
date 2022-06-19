import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public hasStateAsideChange: ReplaySubject<string> = new ReplaySubject<string>();

  constructor() { }
}
