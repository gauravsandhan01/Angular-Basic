import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

export const routes: Routes = [
    {
        path:'ngClass',
        component:NgClassComponent
    },
    {
        path:'ngStyle',
        component:NgStyleComponent
    }
];
