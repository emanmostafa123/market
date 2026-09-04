import { Routes } from '@angular/router';
import { Layout } from '../Components/layout/layout';

export const routes: Routes = [
{    path: '',
    loadComponent: ()=> 
        import('./../Components/layout/layout').then(m => m.Layout),
    children:[
        
    ]

}];
