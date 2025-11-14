import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRon } from './about-ron';

describe('AboutRon', () => {
  let component: AboutRon;
  let fixture: ComponentFixture<AboutRon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
