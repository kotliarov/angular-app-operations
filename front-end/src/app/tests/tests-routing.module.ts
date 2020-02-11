import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestListComponent }    from './test-list.component';
import { TestDetailComponent }  from './test-detail/test-detail.component';
import { TestEditComponent }  from './test-edit/test-edit.component';

const testRoutes: Routes = [
  { path: 'tests', component: TestListComponent },
  { path: 'tests/:id', component: TestDetailComponent },
  { path: 'tests/:id/edit', component: TestEditComponent },
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
