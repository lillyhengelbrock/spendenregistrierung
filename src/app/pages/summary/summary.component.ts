import { Component } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { SubmissionData } from '../../services/web-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  data: SubmissionData | null = null;
  constructor (private formDataService: FormDataService, private router: Router){
    this.data = this.formDataService.getFormData();
    
  }
  goBack() {
    this.router.navigate(['/form']);
  }

}
