import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCovalentModule } from '../../../material-covalent/material-covalent.module';
import { DashboardFooterComponent } from './dashboard-footer.component';
import { AppConfig } from '../../../../config/config';

describe('DashboardFooterComponent', () => {
  let component: DashboardFooterComponent;
  let fixture: ComponentFixture<DashboardFooterComponent>;
  let nativeEl: HTMLElement;
  let config: AppConfig;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialCovalentModule],
      declarations: [DashboardFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFooterComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    config = {
      product: 'product',
      owner: 'owner',
      ownerLink: 'http://www.ownerlink.org',
      slogan: 'slogan',
      developer: 'developer',
      developerLink: 'https://www.developer.com',
      year: new Date().getFullYear()
    };
    component.config = config;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the developer name', () => {
    const name = nativeEl.querySelector('.developer-link').innerHTML;
    expect(name).toEqual(config.developer);
  });

  it('should show the owner name', () => {
    const name = nativeEl.querySelector('.owner-link').innerHTML;
    expect(name).toEqual(config.owner);
  });

  it('should show the current year', () => {
    const year = nativeEl.querySelector('.current-year').innerHTML;
    expect(year).toContain(config.year);
  });

  it('should get the developer link', () => {
    const link = nativeEl.querySelector('.developer-link').getAttribute('href');
    expect(link).toEqual(config.developerLink);
  });

  it('should get the owner link', () => {
    const link = nativeEl.querySelector('.owner-link').getAttribute('href');
    expect(link).toEqual(config.ownerLink);
  });
});
