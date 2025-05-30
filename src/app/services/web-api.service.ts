import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

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

  constructor (){}

  submitForm(data: SubmissionData): Observable<any> {
    return of({ success: true, message: 'Data received!'}).pipe(delay(500))
  }
}
