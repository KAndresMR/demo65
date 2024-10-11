import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  mensajes:string [] = ['Hola','Buenos dias', 'Saludos', 'Cuenca']
  
  constructor() { }
  

  add(message: string){
  this.mensajes.push(message)
  }

  clear(){
    this.mensajes = []
  }

  get() {
    return this.mensajes
  }

}
