/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE matiereBaseService PLEASE EDIT ../matiere.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Matiere } from '../../domain/gestionuniversity_db/matiere';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../matiere.service.ts
 */

/*
 * SCHEMA DB matiere
 *
	{
		nom_mat: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class MatiereBaseService {

    contextUrl: string = environment.endpoint + '/matiere';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * matiereService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Matiere): Observable<Matiere> {
        return this.http
            .post<Matiere>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * matiereService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * matiereService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Matiere> {
        return this.http
            .get<Matiere>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * matiereService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Matiere[]> {
        return this.http
            .get<Matiere[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * matiereService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Matiere): Observable<Matiere> {
        return this.http
            .post<Matiere>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}