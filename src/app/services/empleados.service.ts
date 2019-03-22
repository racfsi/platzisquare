import { Injectable } from "@angular/core";
@Injectable()
export class EmpleadosService {
    empleados: any = [
        { id: 1, nombre: 'Carlos Ruiz', cargo: 'Desarrollador FullStack', edad: 22 },
        { id: 2, nombre: 'Gustavo Palomino', cargo: 'CEO', edad: 37 },
        { id: 3, nombre: 'Viviana Avella', cargo: 'Diseñadora', edad: 28 },
        { id: 4, nombre: 'Dhirman Villalba', cargo: 'Diseñador', edad: 12 },
        { id: 5, nombre: 'Camilo Aguillon', cargo: 'Desarrollador FrontEnd', edad: 19 },
    ];
    public getEmpleados() {
        return this.empleados;
    }
    public getBuscarEmpleado(id) {
        return this.empleados.filter((empleado) => { return empleado.id == id })[0] || null;
    }
}
