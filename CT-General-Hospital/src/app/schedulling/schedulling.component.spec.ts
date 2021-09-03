import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedullingComponent } from './schedulling.component';

describe('SchedullingComponent', () => {
  let component: SchedullingComponent;
  let fixture: ComponentFixture<SchedullingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedullingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedullingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
