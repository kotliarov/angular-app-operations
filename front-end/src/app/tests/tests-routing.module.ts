import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestListComponent }    from './test-list/test-list.component';
import { TestDetailComponent }  from './test-detail/test-detail.component';
import { TestEditComponent }  from './test-edit/test-edit.component';
import { TestNewComponent }  from './test-new/test-new.component';
import { TestMainComponent }  from './test-main/test-main.component';


const testRoutes: Routes = [
  { path: 'tests', component: TestMainComponent,
    children:  [
          { path: '', component: TestListComponent },
          { path: 'add', component: TestNewComponent },
          { path: ':id', component: TestDetailComponent },
          { path: ':id/edit', component: TestEditComponent },
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestsRoutingModule { }
