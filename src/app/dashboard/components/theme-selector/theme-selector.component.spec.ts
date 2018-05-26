import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialCovalentModule } from '../../../material-covalent/material-covalent.module';
import { Theme, themesMock } from '../../../shared';
import { ThemeSelectorComponent } from './theme-selector.component';

describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent;
  let fixture: ComponentFixture<ThemeSelectorComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialCovalentModule ],
      declarations: [ ThemeSelectorComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    component.themes = themesMock;
    component.currentTheme = themesMock[ 0 ].class;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise event emitter when change theme', () => {
    let currentTheme = null;
    const result = Theme.Dark;
    component.emitTheme.subscribe((theme) => {
      currentTheme = theme;
    });

    component.changeTheme(result);

    expect(currentTheme).toBe(result);
  });

  // xit('should show the themes texts', () => {
  //   const button = nativeEl.querySelector('button[mat-icon-button]');
  //   console.log(button);
  //   button.dispatchEvent(new Event('click'));
  //   const names = nativeEl.querySelector('.theme-text').innerHTML;
  //   expect(names.length).toBe(themesMock.length);
  // });
});
