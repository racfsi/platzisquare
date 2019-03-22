import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  id = null;
  infoempleado: any = {};
  constructor(private route: ActivatedRoute, private empleadosService: EmpleadosService) {
    this.id = this.route.snapshot.params['id'];
    this.infoempleado = this.empleadosService.getBuscarEmpleado(this.id);
  }
} 