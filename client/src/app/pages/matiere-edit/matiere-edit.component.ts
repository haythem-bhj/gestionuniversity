// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { MatiereService } from '../../services/matiere.service';

// Import Models
import { Matiere } from '../../domain/gestionuniversity_db/matiere';

// START - USED SERVICES
/**
* matiereService.create
*	@description CRUD ACTION create
*
* matiereService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* matiereService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Matiere
 */
@Component({
    selector: 'app-matiere-edit',
    templateUrl: 'matiere-edit.component.html',
    styleUrls: ['matiere-edit.component.css']
})
export class MatiereEditComponent implements OnInit {
    item: Matiere;
    
    model: Matiere;
    formValid: Boolean;

    constructor(
    private matiereService: MatiereService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Matiere();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.matiereService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Matiere
     *
     * @param {boolean} formValid Form validity check
     * @param Matiere item Matiere to save
     */
    save(formValid: boolean, item: Matiere): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.matiereService.update(item).subscribe(data => this.goBack());
            } else {
                this.matiereService.create(item).subscribe(data => this.goBack());
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



