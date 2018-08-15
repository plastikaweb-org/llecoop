import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-sections-container',
  templateUrl: './sections-container.component.html',
  styleUrls: [ './sections-container.component.scss' ]
})
export class SectionsContainerComponent {
  @Input() headerData: { title: string, subTitle: string, img: string };
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  options: FormlyFormOptions = {};
  form = new FormGroup({});

  onSubmit(e) {
    e.stopPropagation();
    if (this.form.value) {
      this.submit.emit(this.form.value);
    }
  }
}
