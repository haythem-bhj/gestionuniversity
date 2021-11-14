import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProfesseureService } from '../../services/professeure.service';
// Import Models
import { Professeure } from '../../domain/gestionuniversity_db/professeure';

// START - USED SERVICES
/**
* professeureService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* professeureService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Professeure
 * @class ProfesseureListComponent
 */
@Component({
    selector: 'app-professeure-list',
    templateUrl: './professeure-list.component.html',
    styleUrls: ['./professeure-list.component.css']
})
export class ProfesseureListComponent implements OnInit {
    list: Professeure[];
    search: any = {};
    idSelected: string;
    constructor(
        private professeureService: ProfesseureService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.professeureService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Professeure to remove
     *
     * @param {string} id Id of the Professeure to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Professeure
     */
    deleteItem() {
        this.professeureService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
