import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageswitcherComponent } from './languageswitcher.component';

describe('LanguageswitcherComponent', () => {
  let component: LanguageswitcherComponent;
  let fixture: ComponentFixture<LanguageswitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageswitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
