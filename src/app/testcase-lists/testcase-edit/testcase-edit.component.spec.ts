import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseEditComponent } from './testcase-edit.component';

describe('TestcaseEditComponent', () => {
  let component: TestcaseEditComponent;
  let fixture: ComponentFixture<TestcaseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcaseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
