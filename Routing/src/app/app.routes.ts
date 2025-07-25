import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Varayti } from './components/varayti/varayti';
import { Contactus } from './components/contactus/contactus';
import { LoginPage } from './components/login-page/login-page';
import { Fouter } from './components/fouter/fouter';
import { About } from './components/about/about';

export const routes: Routes = [
    
    {
        path :'',
        component:Home
    },

    {
        path:"varayti",
        component:Varayti

    },
    {
        path:'about',
        component:About
    },

    {
        path:'contact',
        component:Contactus
    },
    {
        path:'login',
        component:LoginPage
    },

    {
        path:'fouter',
        component:Fouter
    }

];
