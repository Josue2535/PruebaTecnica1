import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RifaService } from '../../Services/rifa.service';
import { UserService, UserRespnse } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rifa-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rifa-create.component.html',
  styleUrls: ['./rifa-create.component.css']
})
export class RifaCreateComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  fechaCreacion!: Date;
  fechaFinalizacion!: Date;
  usuarioId!: number;
  usuarios: UserRespnse[] = [];

  constructor(private rifaService: RifaService, private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUserLists().subscribe((res: any) => {
      this.usuarios = res;
    });
  }

  saveRifa() {
    const rifaData = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      fechaCreacion: this.fechaCreacion,
      fechaFinalizacion: this.fechaFinalizacion,
      usuarioId: this.usuarioId
    };

    console.log("Guardando rifa con datos:", rifaData);
    this.rifaService.saveRifa(rifaData).subscribe({
      next: (res: any) => {
        console.log('Rifa creada con éxito', res);
      },
      error: (err: any) => {
        console.error('Error al crear la rifa', err);
      }
    });
  }
}
