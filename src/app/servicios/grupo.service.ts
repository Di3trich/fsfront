import {Injectable} from '@angular/core';
import {Grupo} from '../interfaces/api';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GrupoService {
    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:8000/quehacer/api/grupo/';
    }

    getListaGrupos() {
        return this.http.get<Grupo[]>(this.apiUrl);
    }
}
