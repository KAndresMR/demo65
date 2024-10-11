import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermercadoComponent } from './supermercado.component'; // Importa SupermercadoComponent en lugar de MensajesComponent

describe('SupermercadoComponent', () => { // Cambia el nombre del describe a 'SupermercadoComponent'
  let component: SupermercadoComponent; // Cambia el tipo de component a SupermercadoComponent
  let fixture: ComponentFixture<SupermercadoComponent>; // Cambia el tipo de fixture a ComponentFixture<SupermercadoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupermercadoComponent] // Asegúrate de declarar SupermercadoComponent en la configuración de pruebas
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupermercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
