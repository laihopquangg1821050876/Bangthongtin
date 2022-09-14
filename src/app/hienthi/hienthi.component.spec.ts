import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienthiComponent } from './hienthi.component';

describe('HienthiComponent', () => {
  let component: HienthiComponent;
  let fixture: ComponentFixture<HienthiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienthiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
