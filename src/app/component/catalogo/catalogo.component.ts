import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Productos } from '../../common/productos';
import { DataService } from '../../service/data.service';



@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  constructor(private dataService: DataService) { }

  Productos: Productos = { productos: [] };



  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos() {
    this.dataService.getProducto().subscribe({
      next: (data) => {
        if (data) {
          console.log(data);
          this.Productos = data;
        }
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    });
  }
}
