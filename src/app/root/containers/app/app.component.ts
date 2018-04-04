import { Component } from '@angular/core';
import { AppSandbox } from '../../app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private sandBox: AppSandbox) {}
}
