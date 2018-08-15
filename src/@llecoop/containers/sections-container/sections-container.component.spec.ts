import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { config, CONFIG_TOKEN } from 'config/config';
import { AppSandbox } from 'app/root/sandbox/app.sandbox';

import { SectionsContainerComponent } from './sections-container.component';

describe('SectionsContainerComponent', () => {
  let component: SectionsContainerComponent;
  let fixture: ComponentFixture<SectionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientModule, MatIconModule, MatToolbarModule,
          MatCardModule, StoreModule.forRoot({}) ],
        declarations: [ SectionsContainerComponent ],
        providers: [ { provide: CONFIG_TOKEN, useValue: config }, AppSandbox, ChangeDetectorRef ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
