import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';
import { AppSandbox } from '../../../../root/sandbox/app.sandbox';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html'
})
export class AuthContainerComponent implements AfterViewInit {
  config = this.sandbox.appConfig;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  options: FormlyFormOptions = {};
  form = new FormGroup({});

  constructor(private sandbox: AppSandbox, private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (this.options.resetModel) {
      this.options.resetModel();
      this.changeDetector.detectChanges();
    }
    this.form.markAsUntouched();
  }

  onSubmit(e) {
    e.stopPropagation();
    if (this.form.value) {
      this.submit.emit(this.form.value);
    }
  }
}
