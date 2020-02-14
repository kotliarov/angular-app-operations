import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestListComponent }    from './test-list/test-list.component';
import { TestDetailComponent }  from './test-detail/test-detail.component';
import { TestEditComponent }  from './test-edit/test-edit.component';
import { TestNewComponent }  from './test-new/test-new.component';


const testRoutes: Routes = [
  { path: 'tests', component: TestListComponent,
    children:  [
          { path: ':id', component: TestDetailComponent },
          { path: ':id/edit', component: TestEditComponent },
          { path: 'new', component: TestNewComponent }
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
