import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCovalentModule } from '@llecoop/material-covalent/material-covalent.module';
import { configMock } from '@llecoop';
import { DashboardFooterComponent } from './dashboard-footer.component';

describe('DashboardFooterComponent', () => {
  let component: DashboardFooterComponent;
  let fixture: ComponentFixture<DashboardFooterComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialCovalentModule ],
      declarations: [ DashboardFooterComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFooterComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    component.config = configMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the developer name', () => {
    const name = nativeEl.querySelector('.developer-link').innerHTML;
    expect(name).toEqual(configMock.developer);
  });

  it('should show the owner name', () => {
    const name = nativeEl.querySelector('.owner-link').innerHTML;
    expect(name).toEqual(configMock.owner);
  });

  it('should show the current year', () => {
    const year = nativeEl.querySelector('.current-year').innerHTML;
    expect(year).toContain(configMock.year);
  });

  it('should get the developer link', () => {
    const link = nativeEl.querySelector('.developer-link').getAttribute('href');
    expect(link).toEqual(configMock.developerLink);
  });

  it('should get the owner link', () => {
    const link = nativeEl.querySelector('.owner-link').getAttribute('href');
    expect(link).toEqual(configMock.ownerLink);
  });
});
