import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ContactoComponent } from './component/contacto/contacto.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home',  pathMatch: 'full'},
    { path: 'home', title: 'home',  component: HomeComponent },
    { path: 'catalogo', title: 'catalogo',  component: CatalogoComponent },
    { path: 'contacto', title: 'contacto',  component: ContactoComponent },
    { path: '**', component: NotFoundComponent },
];
