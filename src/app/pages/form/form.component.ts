import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDataService } from '../../services/form-data.service';
import { WebApiService } from '../../services/web-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
  showExtraFields = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService,
    private webApiService: WebApiService
  ) {
    this.form = this.fb.group({
      art: ['', Validators.required],
      abholung: [false],
      name: ['', Validators.required],
      strasse: [''],
      hausnummer: [''],
      plz: [''],
      ort: ['']

    });
    this.form.get('abholung')?.valueChanges.subscribe((checked) => {
      const requiredFields = ['strasse', 'hausnummer', 'ort']
      requiredFields.forEach((controlName) => {
        const control = this.form.get(controlName)
        if (checked) {
          control?.setValidators([Validators.required])
        } else {
          control?.clearValidators();
        }
        control?.updateValueAndValidity();
      })
      const plzVal = this.form.get('plz');
      if (checked) {
        plzVal?.setValidators([
          Validators.required,
          Validators.pattern(/^34\d{3}$/)
        ])
      } else {
        plzVal?.clearValidators();
      }
      plzVal?.updateValueAndValidity
    })
  }

  onSubmit(){
    console.log("onSubmit initiated", this.form.valid, this.form.value)
    
    if (this.form.valid) {
      
      const formData = this.form.value;

      this.webApiService.submitForm(formData).subscribe({
        next: () => {
          this.formDataService.setFormData(formData)
          this.router.navigate(['/summary'])
        },
        error: (err) => {
          console.error('Absenden fehlgeschlagen', err)
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
