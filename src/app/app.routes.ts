import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { IniciarsesionComponent } from './component/iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home',  pathMatch: 'full'},
    { path: 'home', title: 'home',  component: HomeComponent },
    { path: 'catalogo', title: 'catalogo',  component: CatalogoComponent },
    { path: 'contacto', title: 'contacto',  component: ContactoComponent },
    { path: 'iniciarsesion', title: 'iniciar sesion',  component: IniciarsesionComponent },
    { path: 'registrarse', title: 'Registrarse',  component: RegistrarseComponent },
    { path: 'pagina-producto/:id', title: 'Producto', component: PaginaProductoComponent},
    { path: 'pagina-producto/:parametro1/:parametro2/:parametro3/:parametro4/:parametro5', component: PaginaProductoComponent },
    { path: '**', component: NotFoundComponent },
    
];
