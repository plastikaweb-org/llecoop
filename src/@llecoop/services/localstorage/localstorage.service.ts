import { Injectable } from '@angular/core';
import { WindowRefService } from '../windowref/windowref.service';


@Injectable()
export class LocalstorageService {
  win;

  constructor(private windowRefService: WindowRefService) {
    this.win = windowRefService.nativeWindow;
  }

  setItem(name: string, value: string): void {
    this.win.localStorage.setItem(name, value);
  }

  getItem(name: string): string {
    return this.win.localStorage.getItem(name);
  }

  removeItem(name: string): void {
    this.win.localStorage.removeItem(name);
  }
}
