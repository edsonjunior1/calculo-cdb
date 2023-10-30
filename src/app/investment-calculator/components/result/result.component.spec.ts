import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent]
    });
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true when reset is called', () => {
    let emittedValue: boolean | undefined;

    component.resetEvent.subscribe((value) => {
      emittedValue = value;
    });

    component.reset();

    expect(emittedValue).toBe(true);
  });
});
