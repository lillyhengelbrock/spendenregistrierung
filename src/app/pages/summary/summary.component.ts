import { Component } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { SubmissionData } from '../../services/web-api.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  imports: [JsonPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  data: SubmissionData | null = null;
  constructor (private formDataService: FormDataService){
    this.data = this.formDataService.getFormData();
    
  }
  

}
