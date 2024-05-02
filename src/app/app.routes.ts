import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home',  pathMatch: 'full'},
    { path: 'home', title: 'home',  component: HomeComponent },
    { path: 'catalogo', title: 'home',  component: CatalogoComponent },
    
];
