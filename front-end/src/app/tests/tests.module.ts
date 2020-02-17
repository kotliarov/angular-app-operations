import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialUiModule } from '../material-ui/material-ui.module'
import { TestListComponent } from './test-list/test-list.component'
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { TestNewComponent } from './test-new/test-new.component';
import { TestsRoutingModule } from './tests-routing.module';
import { TestMainComponent } from './test-main/test-main.component';
import { TestFormComponent } from './test-form/test-form.component';

@NgModule({
  declarations: [
    TestListComponent,
    TestDetailComponent,
    TestEditComponent,
    TestNewComponent,
    TestMainComponent,
    TestFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestsRoutingModule,
    MaterialUiModule
  ],
  exports: [
    TestListComponent,
    TestDetailComponent,
    TestEditComponent,
    TestNewComponent
  ]
})
export class TestsModule { }
