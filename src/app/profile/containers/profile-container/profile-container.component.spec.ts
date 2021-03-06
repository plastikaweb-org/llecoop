import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCovalentModule } from '@llecoop';
import { CardContentFormModule } from '@llecoop/components/card-content-form/card-content-form.module';
import { SectionsContainerModule } from '@llecoop/containers/sections-container/sections-container.module';
import { StoreModule } from '@ngrx/store';
import { ProfileSandbox } from '../../sandbox/profile.sandbox';

import { ProfileContainerComponent } from './profile-container.component';

describe('ProfileContainerComponent', () => {
  let component: ProfileContainerComponent;
  let fixture: ComponentFixture<ProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          SectionsContainerModule,
          BrowserAnimationsModule,
          MaterialCovalentModule,
          CardContentFormModule,
          StoreModule.forRoot({})
        ],
        declarations: [ ProfileContainerComponent ],
        providers: [ ProfileSandbox ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
