import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgIfComponent } from './S_directiveCompont/ng-if/ng-if.component';
import { NgForComponent } from './S_directiveCompont/ng-for/ng-for.component';
import { NgSwitchComponent } from './S_directiveCompont/ng-switch/ng-switch.component';

export const routes: Routes = [
    // {
    //     path:'' ,
    //     component:AppComponent
    // },
    {
        path:'ngIf',
        component:NgIfComponent
    },
    {
        path:'ngFor',
        component:NgForComponent
    },
    {
        path:'ngSwitch',
        component:NgSwitchComponent
    }
];
