import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcquisitionsComponent } from './acquisitions.component';
const routes: Routes = [
  { path: 'acquisitions', component: AcquisitionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquisitionsRoutingModule { }
