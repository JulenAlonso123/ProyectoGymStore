import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home',  pathMatch: 'full'},
    { path: 'home', title: 'home',  component: HomeComponent },
    
];
