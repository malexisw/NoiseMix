import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickersComponent } from './clickers.component';

describe('ClickersComponent', () => {
  let component: ClickersComponent;
  let fixture: ComponentFixture<ClickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
