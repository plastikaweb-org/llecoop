import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialCovalentModule } from '@llecoop';
import { StoreModule } from '@ngrx/store';
import { AppSandbox } from 'app/root/sandbox/app.sandbox';
import { config, CONFIG_TOKEN } from 'config/config';

import { SectionsContainerComponent } from './sections-container.component';

describe('SectionsContainerComponent', () => {
  let component: SectionsContainerComponent;
  let fixture: ComponentFixture<SectionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientModule, MaterialCovalentModule, StoreModule.forRoot({}) ],
        declarations: [ SectionsContainerComponent ],
        providers: [ { provide: CONFIG_TOKEN, useValue: config }, AppSandbox, ChangeDetectorRef ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
