import { Component } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent { 
  empleado: any = {};
  crearEmpleado (){
    console.log(this.empleado);
  }
} 