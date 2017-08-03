import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFirstComponent } from './main-first.component';

describe('MainFirstComponent', () => {
  let component: MainFirstComponent;
  let fixture: ComponentFixture<MainFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
