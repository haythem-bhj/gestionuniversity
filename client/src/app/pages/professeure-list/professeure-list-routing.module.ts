import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesseureListComponent } from './professeure-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProfesseureListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseureListRoutingModule { }
