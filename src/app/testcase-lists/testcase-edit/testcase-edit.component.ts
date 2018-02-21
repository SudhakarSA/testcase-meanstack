import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {DataService} from '../../data.service';

@Component({
  selector: 'app-testcase-edit',
  templateUrl: './testcase-edit.component.html',
  styleUrls: ['./testcase-edit.component.css']
})
export class TestcaseEditComponent implements OnInit {

  testCase: any ;
  status = false;

  constructor(public dataService: DataService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.getTestCase(this.route.snapshot.params['id']);
  }

  getTestCase(id) {
    this.dataService.getTestCase(id).subscribe(res => {
      this.testCase = res.data[0];
    });
  }

  saveTestCase(id, testcase) {
    this.dataService.editTestCase(id, testcase).subscribe();
    this.status = true;
  }

  changeStatus() {
    this.status = false;
  }
}
