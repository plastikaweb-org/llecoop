import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialCovalentModule } from '../../../material-covalent/material-covalent.module';
import { UiTheme, Theme, themesMock } from '../../../shared';
import { ThemeSelectorComponent } from './theme-selector.component';

describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent;
  let fixture: ComponentFixture<ThemeSelectorComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialCovalentModule],
      declarations: [ThemeSelectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    component.themes = themesMock;
    component.currentTheme = themesMock[0].class;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should show the themes texts', () => {
    const button = nativeEl.querySelector('button[mat-icon-button]');
    button.dispatchEvent(new Event('click'));
    const names = nativeEl.querySelector('.theme-text').innerHTML;
    expect(names.length).toBe(themesMock.length);
  });
});
