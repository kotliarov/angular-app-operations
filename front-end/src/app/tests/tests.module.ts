import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialUiModule } from '../material-ui/material-ui.module'
import { TestListComponent } from './test-list.component'
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { TestsRoutingModule } from './tests-routing.module';

@NgModule({
  declarations: [
    TestListComponent,
    TestDetailComponent,
    TestEditComponent,
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
  ]
})
export class TestsModule { }
