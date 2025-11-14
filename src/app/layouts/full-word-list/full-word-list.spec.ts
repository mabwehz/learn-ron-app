import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWordList } from './full-word-list';

describe('FullWordList', () => {
  let component: FullWordList;
  let fixture: ComponentFixture<FullWordList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullWordList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullWordList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
