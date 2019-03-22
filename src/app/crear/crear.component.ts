import { Component } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent { 
  empleado: any = {};
  crearEmpleado (){
    alert("sirve");
    console.log(this.empleado);
  }
} 