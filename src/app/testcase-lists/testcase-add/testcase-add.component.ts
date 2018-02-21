import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-testcase-add',
  templateUrl: './testcase-add.component.html',
  styleUrls: ['./testcase-add.component.css']
})
export class TestcaseAddComponent implements OnInit {

  testCase = { title: '', script: ''};
  status = false;
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  addTestCase(data) {
    console.log('inside component');
    this.dataService.addTestCase(data).subscribe(res => {
      if (res) {
        this.status = true;
        this.testCase = { title: '', script: ''};
      }
    });
  }

  changeStatus()  {
    this.status = false;
  }

}
