import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesseureEditComponent } from './professeure-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProfesseureEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseureEditRoutingModule { }
