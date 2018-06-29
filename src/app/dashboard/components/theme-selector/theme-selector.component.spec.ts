import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialCovalentModule } from '@llecoop/material-covalent/material-covalent.module';
import { Theme, themesMock } from '@llecoop';
import { ThemeSelectorComponent } from './theme-selector.component';

describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent;
  let fixture: ComponentFixture<ThemeSelectorComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialCovalentModule ],
      declarations: [ ThemeSelectorComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    component.themes = themesMock;
    component.currentTheme = themesMock[ 0 ].class;
    fixture.detectChanges();
  }));

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
  xit('should show the themes texts', () => {
    debugEl.query(By.css('button'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();
    const names = debugEl.query(By.css('.theme-text')).nativeElement.innerText;
    expect(names.length).toEqual(themesMock.length);
  });
});
