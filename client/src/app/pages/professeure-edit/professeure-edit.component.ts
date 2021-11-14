// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { ProfesseureService } from '../../services/professeure.service';
import { ExamService } from '../../services/exam.service';

// Import Models
import { Professeure } from '../../domain/gestionuniversity_db/professeure';
import { Exam } from '../../domain/gestionuniversity_db/exam';

// START - USED SERVICES
/**
* professeureService.create
*	@description CRUD ACTION create
*
* professeureService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* professeureService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* examService.findByprof_exam
*	@description CRUD ACTION findByprof_exam
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Professeure
 */
@Component({
    selector: 'app-professeure-edit',
    templateUrl: 'professeure-edit.component.html',
    styleUrls: ['professeure-edit.component.css']
})
export class ProfesseureEditComponent implements OnInit {
    item: Professeure;
    
    externalExam_prof_exam: Exam[];
    model: Professeure;
    formValid: Boolean;

    constructor(
    private professeureService: ProfesseureService,
    private examService: ExamService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Professeure();
        this.externalExam_prof_exam = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.professeureService.get(id).subscribe(item => this.item = item);
                this.examService.findByProf_exam(id).subscribe(list => this.externalExam_prof_exam = list);
            }
            // Get relations
        });
    }


    /**
     * Save Professeure
     *
     * @param {boolean} formValid Form validity check
     * @param Professeure item Professeure to save
     */
    save(formValid: boolean, item: Professeure): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.professeureService.update(item).subscribe(data => this.goBack());
            } else {
                this.professeureService.create(item).subscribe(data => this.goBack());
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



