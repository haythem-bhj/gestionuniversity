// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { ExamService } from '../../services/exam.service';
import { ClasseService } from '../../services/classe.service';
import { ProfesseureService } from '../../services/professeure.service';

// Import Models
import { Exam } from '../../domain/gestionuniversity_db/exam';
import { Classe } from '../../domain/gestionuniversity_db/classe';
import { Professeure } from '../../domain/gestionuniversity_db/professeure';

// START - USED SERVICES
/**
* examService.create
*	@description CRUD ACTION create
*
* examService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* examService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* classeService.list
*	@description CRUD ACTION list
*
* professeureService.list
*	@description CRUD ACTION list
*
* examService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Exam
 */
@Component({
    selector: 'app-exam-edit',
    templateUrl: 'exam-edit.component.html',
    styleUrls: ['exam-edit.component.css']
})
export class ExamEditComponent implements OnInit {
    item: Exam;
    
    listClass_exam: Classe[];
    
    listNom_exam: Exam[];
    
    listProf_exam: Professeure[];
    
    model: Exam;
    formValid: Boolean;

    constructor(
    private examService: ExamService,
    private classeService: ClasseService,
    private professeureService: ProfesseureService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Exam();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.examService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.classeService.list().subscribe(list => this.listClass_exam = list);
            this.examService.list().subscribe(list => this.listNom_exam = list);
            this.professeureService.list().subscribe(list => this.listProf_exam = list);
        });
    }


    /**
     * Save Exam
     *
     * @param {boolean} formValid Form validity check
     * @param Exam item Exam to save
     */
    save(formValid: boolean, item: Exam): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.examService.update(item).subscribe(data => this.goBack());
            } else {
                this.examService.create(item).subscribe(data => this.goBack());
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



