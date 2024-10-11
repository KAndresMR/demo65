import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  elementos: any[] = []; // Inicializa la propiedad elementos
  elementoSeleccionado: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUsuarios();
  }

  obtenerProductos() {
    this.apiService.getProducts().subscribe((productos: any[]) => { // Corrige el nombre del método y especifica el tipo de productos
      this.elementos = productos;
    });
  }

  obtenerUsuarios() {
    this.apiService.getUsers().subscribe((usuarios: any[]) => { // Corrige el nombre del método y especifica el tipo de usuarios
      this.elementos = usuarios;
    });
  }

  mostrarDetalles(event: any) {
    const selectedId = event.target.value;
    // Realiza la lógica para mostrar los detalles del producto correspondiente
  }


  guardar(){
    
  }
}