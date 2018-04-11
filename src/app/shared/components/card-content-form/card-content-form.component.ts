import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-card-content-form',
  template: `
    <form role="form"
          novalidate
          appAutofocus
          [formGroup]="form"
          (ngSubmit)="onSubmit($event)"
          class="push-top-md">
      <mat-card-content>
        <formly-form [form]="form" [options]="options" [fields]="fields"></formly-form>
      </mat-card-content>
      <mat-card-actions>
        <mat-toolbar color="primary" fxFlex fxLayout="column"
                    fxLayoutAlign="center center">
          <button color="accent" mat-button type="submit" [disabled]="!form.valid">{{submitTitle}}</button>
        </mat-toolbar>
      </mat-card-actions>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentFormComponent implements AfterViewInit {
  @Input() footer = true;
  @Input() submitTitle: string;
  @Input() fields: FormlyFieldConfig[];
  @Input() model;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  options: FormlyFormOptions = {};
  form = new FormGroup({});

  constructor(private changeDetector: ChangeDetectorRef) {}

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
