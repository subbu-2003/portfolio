import { Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    {
        path:'', component:SectionComponent
    },
    {
        path:'service', component:ServiceComponent
    }
];
