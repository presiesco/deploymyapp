import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOFComponent } from './fof.component';

describe('FOFComponent', () => {
  let component: FOFComponent;
  let fixture: ComponentFixture<FOFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
