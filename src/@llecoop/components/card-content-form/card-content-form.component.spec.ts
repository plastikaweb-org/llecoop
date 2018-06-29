import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentFormComponent } from './card-content-form.component';

describe('CardContentFormComponent', () => {
  let component: CardContentFormComponent;
  let fixture: ComponentFixture<CardContentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardContentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
