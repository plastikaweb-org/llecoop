import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedContainerComponent } from './shared-container.component';

@Component({
  selector: 'app-my-container',
  template: ''
})
class MyContainerComponent extends SharedContainerComponent {
  constructor() {
    super(null);
  }
}

describe('SharedContainerComponent', () => {
  let component: MyContainerComponent;
  let fixture: ComponentFixture<MyContainerComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
        imports: [ BrowserAnimationsModule ],
        declarations: [ MyContainerComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
