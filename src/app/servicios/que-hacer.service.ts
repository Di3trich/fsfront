import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QueHacer} from '../interfaces/api';

@Injectable()
export class QueHacerService {
    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:8000/quehacer/api/quehacer/';
    }

    setQueHacer(quehacer: QueHacer) {
        return this.http.post<QueHacer>(this.apiUrl, quehacer);
    }

    eliminarQueHacer(idUrl: string) {
        return this.http.delete(idUrl);
    }
}
