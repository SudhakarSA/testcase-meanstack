import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseAddComponent } from './testcase-add.component';

describe('TestcaseAddComponent', () => {
  let component: TestcaseAddComponent;
  let fixture: ComponentFixture<TestcaseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcaseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
