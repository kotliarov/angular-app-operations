import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplesComponent } from './samples/samples.component';
import { LabsComponent } from './labs/labs.component';


const routes: Routes = [
  { path: '', redirectTo: 'tests', pathMatch: 'full' },
  { path: 'samples', component: SamplesComponent },
  { path: 'labs', component: LabsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
