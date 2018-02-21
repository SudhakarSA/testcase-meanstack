import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestcaseListsComponent } from './testcase-lists/testcase-lists.component';
import { TestcaseAddComponent } from './testcase-lists/testcase-add/testcase-add.component';
import { TestcaseEditComponent } from './testcase-lists/testcase-edit/testcase-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestcaseListsComponent,
    TestcaseAddComponent,
    TestcaseEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
