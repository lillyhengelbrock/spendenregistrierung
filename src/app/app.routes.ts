import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { FormComponent } from './pages/form/form.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { LegalComponent } from './pages/legal/legal.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'form', component: FormComponent},
    {path: 'summary', component: SummaryComponent},
    {path: 'legal', component: LegalComponent},
    {path: 'privacy', component: PrivacyComponent}
];
