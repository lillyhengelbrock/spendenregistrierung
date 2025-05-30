import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SubmissionData {
  abholung: boolean;
  art: string;
  name: string;
  strasse: string;
  hausnummer: string;
  plz: string;
  ort: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  private apiUrl = '/api/submissions';

  constructor (private http: HttpClient){}

  submitForm(data: SubmissionData): Observable<any> {
    return this.http.post(this.apiUrl, data)
  }
}
