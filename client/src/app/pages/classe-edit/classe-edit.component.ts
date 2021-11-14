// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { ClasseService } from '../../services/classe.service';
import { EtudiantService } from '../../services/etudiant.service';
import { ExamService } from '../../services/exam.service';

// Import Models
import { Classe } from '../../domain/gestionuniversity_db/classe';
import { Exam } from '../../domain/gestionuniversity_db/exam';
import { Etudiant } from '../../domain/gestionuniversity_db/etudiant';

// START - USED SERVICES
/**
* classeService.create
*	@description CRUD ACTION create
*
* classeService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* classeService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* etudiantService.findByetud_class
*	@description CRUD ACTION findByetud_class
*	@param Objectid key Id of model to search for
*
* examService.findByclass_exam
*	@description CRUD ACTION findByclass_exam
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Classe
 */
@Component({
    selector: 'app-classe-edit',
    templateUrl: 'classe-edit.component.html',
    styleUrls: ['classe-edit.component.css']
})
export class ClasseEditComponent implements OnInit {
    item: Classe;
    
    externalExam_class_exam: Exam[];
    externalEtudiant_etud_class: Etudiant[];
    model: Classe;
    formValid: Boolean;

    constructor(
    private classeService: ClasseService,
    private etudiantService: EtudiantService,
    private examService: ExamService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Classe();
        this.externalExam_class_exam = [];
        this.externalEtudiant_etud_class = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.classeService.get(id).subscribe(item => this.item = item);
                this.examService.findByClass_exam(id).subscribe(list => this.externalExam_class_exam = list);
                this.etudiantService.findByEtud_class(id).subscribe(list => this.externalEtudiant_etud_class = list);
            }
            // Get relations
        });
    }


    /**
     * Save Classe
     *
     * @param {boolean} formValid Form validity check
     * @param Classe item Classe to save
     */
    save(formValid: boolean, item: Classe): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.classeService.update(item).subscribe(data => this.goBack());
            } else {
                this.classeService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



