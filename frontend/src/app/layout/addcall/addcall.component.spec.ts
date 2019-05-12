import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcallComponent } from './addcall.component';

describe('AddcallComponent', () => {
  let component: AddcallComponent;
  let fixture: ComponentFixture<AddcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
