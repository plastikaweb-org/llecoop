import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FormContainerComponent } from './form-container.component';

describe('FormContainerComponent', () => {
  let component: FormContainerComponent;
  let fixture: ComponentFixture<FormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ ReactiveFormsModule, FormlyModule.forRoot() ],
        declarations: [ FormContainerComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
