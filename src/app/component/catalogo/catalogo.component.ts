import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RopaCatalogoComponent } from '../ropa-catalogo/ropa-catalogo.component';
import { ProteinaCatalogoComponent } from '../proteina-catalogo/proteina-catalogo.component';
import { SuplementosCatalogoComponent } from '../suplementos-catalogo/suplementos-catalogo.component';
import { AccesoriosCatalogoComponent } from '../accesorios-catalogo/accesorios-catalogo.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NavbarComponent,RopaCatalogoComponent,ProteinaCatalogoComponent,SuplementosCatalogoComponent,AccesoriosCatalogoComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
