import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatMenuModule } from '@angular/material';
import { By } from '@angular/platform-browser';

import { ProfileBtnComponent } from './profile-btn.component';

@Component({ selector: 'app-host', template: '<mat-menu #notificationsMenu="matMenu"></mat-menu>' })
class HostComponent {
}

describe('ProfileBtnComponent', () => {
  let fixture: ComponentFixture<ProfileBtnComponent>;
  let img: DebugElement;
  let salutation: DebugElement;
  let component: ProfileBtnComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ MatMenuModule, MatIconModule ],
        declarations: [ ProfileBtnComponent, HostComponent ],
        schemas: [NO_ERRORS_SCHEMA],
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBtnComponent);
    component = fixture.componentInstance;
    component.basicProfile = {
      name: 'Rob',
      fullName: 'Rob Smith',
      img: 'https://api.adorable.io/avatars/285/3@adorable.io.png'
    };
    component.profileMenu = 'notificationsMenu';
    img = fixture.debugElement.query(By.css('img'));
    salutation = fixture.debugElement.query(By.css('.profile-salutation'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have correct image', () => {
  //   fixture.detectChanges();
  //
  //   console.log(img);
  //   expect(img).toBeTruthy();
  // });
});
