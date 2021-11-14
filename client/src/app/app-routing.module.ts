// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { ClasseEditComponent} from './pages/classe-edit/classe-edit.component';
import { ClasseListComponent} from './pages/classe-list/classe-list.component';
import { EtudiantEditComponent} from './pages/etudiant-edit/etudiant-edit.component';
import { EtudiantListComponent} from './pages/etudiant-list/etudiant-list.component';
import { ExamEditComponent} from './pages/exam-edit/exam-edit.component';
import { ExamListComponent} from './pages/exam-list/exam-list.component';
import { MatiereEditComponent} from './pages/matiere-edit/matiere-edit.component';
import { MatiereListComponent} from './pages/matiere-list/matiere-list.component';
import { ProfesseureEditComponent} from './pages/professeure-edit/professeure-edit.component';
import { ProfesseureListComponent} from './pages/professeure-list/professeure-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'classes/:id',  loadChildren: './pages/classe-edit/classe-edit.module#ClasseEditModule' , canActivate: [AuthGuard] },
    { path: 'classes',  loadChildren: './pages/classe-list/classe-list.module#ClasseListModule' , canActivate: [AuthGuard] },
    { path: 'etudiants/:id',  loadChildren: './pages/etudiant-edit/etudiant-edit.module#EtudiantEditModule' , canActivate: [AuthGuard] },
    { path: 'etudiants',  loadChildren: './pages/etudiant-list/etudiant-list.module#EtudiantListModule' , canActivate: [AuthGuard] },
    { path: 'exams/:id',  loadChildren: './pages/exam-edit/exam-edit.module#ExamEditModule' , canActivate: [AuthGuard] },
    { path: 'exams',  loadChildren: './pages/exam-list/exam-list.module#ExamListModule' , canActivate: [AuthGuard] },
    { path: 'matieres/:id',  loadChildren: './pages/matiere-edit/matiere-edit.module#MatiereEditModule' , canActivate: [AuthGuard] },
    { path: 'matieres',  loadChildren: './pages/matiere-list/matiere-list.module#MatiereListModule' , canActivate: [AuthGuard] },
    { path: 'professeures/:id',  loadChildren: './pages/professeure-edit/professeure-edit.module#ProfesseureEditModule' , canActivate: [AuthGuard] },
    { path: 'professeures',  loadChildren: './pages/professeure-list/professeure-list.module#ProfesseureListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
