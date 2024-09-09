import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'listaTareasApp';

    listaTareas: string[] = [];
    nuevaTarea: string = '';

    //Nueva forma para inyectar servicios
    private _tareasService = inject(TareasService);

    ngOnInit(): void {
      this.listaTareas = this._tareasService.getTareas();
    }

    agregarTarea() {
      this._tareasService.agregarTarea(this.nuevaTarea); //agregamos la tarea al localStorage a traves del servicio
      this.nuevaTarea = ''; //vaciamos el input
      this.listaTareas = this._tareasService.getTareas(); //traemos toda la lista de tareas para actualizar informacion
    }

    eliminarTarea(index: number) {
      this._tareasService.eliminarTarea(index);
      this.listaTareas = this._tareasService.getTareas();
    }

}
