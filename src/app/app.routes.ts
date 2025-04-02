import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'companies', component: CompanyListComponent },
    { path: 'vacancies', component: VacancyListComponent },
    { path: 'companies/:id/vacancies', component: VacancyListComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
