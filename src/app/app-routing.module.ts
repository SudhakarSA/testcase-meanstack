import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestcaseListsComponent} from './testcase-lists/testcase-lists.component';
import {TestcaseAddComponent} from './testcase-lists/testcase-add/testcase-add.component';
import {TestcaseEditComponent} from './testcase-lists/testcase-edit/testcase-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/testcases', pathMatch: 'full' },
  { path: 'testcases', component: TestcaseListsComponent, },
  { path: 'testcases/add',  component: TestcaseAddComponent },
  { path: 'testcases/edit/:id',  component: TestcaseEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
