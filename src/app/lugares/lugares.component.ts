import { Component } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent { 
  titulo:string="Intuition Studio";
  lat:number = 4.7222527;
  lng:number = -74.1156979;
  zoom:number = 18;
  empleados = null;
  constructor(private empleadosService: EmpleadosService) {
    this.empleados = empleadosService.getEmpleados();
  }
} 