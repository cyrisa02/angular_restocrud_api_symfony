import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoitemComponent } from './restoitem.component';

describe('RestoitemComponent', () => {
  let component: RestoitemComponent;
  let fixture: ComponentFixture<RestoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
