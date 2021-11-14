import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesseureListComponent } from './professeure-list.component';
import { ProfesseureListRoutingModule } from './professeure-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProfesseureListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProfesseureListComponent
  ]
})
export class ProfesseureListModule { }
