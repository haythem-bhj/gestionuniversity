import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesseureEditComponent } from './professeure-edit.component';
import { ProfesseureEditRoutingModule } from './professeure-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProfesseureEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProfesseureEditComponent
  ]
})
export class ProfesseureEditModule { }
