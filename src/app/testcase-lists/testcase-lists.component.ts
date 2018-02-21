import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-testcase-lists',
  templateUrl: './testcase-lists.component.html',
  styleUrls: ['./testcase-lists.component.css']
})
export class TestcaseListsComponent implements OnInit {

  testCase: any = [];
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTestCases().subscribe(res => {
      this.testCase = res.data;
    });
  }

}
