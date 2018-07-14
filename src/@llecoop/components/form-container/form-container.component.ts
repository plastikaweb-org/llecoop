import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormContainerComponent implements OnDestroy {
  @Input() formBuilder: FormlyFieldConfig[];
  @Input() model: any;
  @Input() resetAvailable = false;
  @Input() submitAvailable = true;
  @Input() submitLabel: string;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<void>();
  options: FormlyFormOptions = {};
  form = new FormGroup({});

  onSubmit(e) {
    e.stopPropagation();
    if (this.model) {
      this.submit.emit(this.model);
    }
  }

  onReset(e) {
    e.stopPropagation();
    this.reset.emit();
  }

  ngOnDestroy() {
    this.submit.unsubscribe();
  }
}
