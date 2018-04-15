import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePopinComponent } from './simple-popin.component';

describe('SimplePopinComponent', () => {
  let component: SimplePopinComponent;
  let fixture: ComponentFixture<SimplePopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
