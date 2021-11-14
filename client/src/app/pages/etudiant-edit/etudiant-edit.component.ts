// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { EtudiantService } from '../../services/etudiant.service';
import { ClasseService } from '../../services/classe.service';

// Import Models
import { Etudiant } from '../../domain/gestionuniversity_db/etudiant';
import { Classe } from '../../domain/gestionuniversity_db/classe';

// START - USED SERVICES
/**
* etudiantService.create
*	@description CRUD ACTION create
*
* etudiantService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* etudiantService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* classeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Etudiant
 */
@Component({
    selector: 'app-etudiant-edit',
    templateUrl: 'etudiant-edit.component.html',
    styleUrls: ['etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
    item: Etudiant;
    
    listEtud_class: Classe[];
    
    model: Etudiant;
    formValid: Boolean;

    constructor(
    private etudiantService: EtudiantService,
    private classeService: ClasseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Etudiant();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.etudiantService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.classeService.list().subscribe(list => this.listEtud_class = list);
        });
    }


    /**
     * Save Etudiant
     *
     * @param {boolean} formValid Form validity check
     * @param Etudiant item Etudiant to save
     */
    save(formValid: boolean, item: Etudiant): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.etudiantService.update(item).subscribe(data => this.goBack());
            } else {
                this.etudiantService.create(item).subscribe(data => this.goBack());
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



