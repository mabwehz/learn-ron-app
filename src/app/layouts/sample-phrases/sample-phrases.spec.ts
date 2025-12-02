import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePhrases } from './sample-phrases';

describe('SamplePhrases', () => {
  let component: SamplePhrases;
  let fixture: ComponentFixture<SamplePhrases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplePhrases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePhrases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
