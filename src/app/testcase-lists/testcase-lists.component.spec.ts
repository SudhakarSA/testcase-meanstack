import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseListsComponent } from './testcase-lists.component';

describe('TestcaseListsComponent', () => {
  let component: TestcaseListsComponent;
  let fixture: ComponentFixture<TestcaseListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcaseListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
