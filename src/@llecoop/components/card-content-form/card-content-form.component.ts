import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-card-content-form',
  templateUrl: './card-content-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentFormComponent implements AfterViewInit, OnChanges {
  @Input() footer = true;
  @Input() submitTitle: string;
  @Input() fields: FormlyFieldConfig[];
  @Input() model;
  @Input() disabled = false;
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

  ngOnChanges() {
    this.disabled ? this.form.disable() : this.form.enable();
  }

  onSubmit(e) {
    e.stopPropagation();
    if (this.form.value) {
      this.submit.emit(this.form.value);
    }
  }
}
