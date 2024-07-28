import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RifaService } from '../../Services/rifa.service';

export interface RifaResponse {
  id: number;
  nombre: string;
  descripcion: string;
  fechaCreacion: Date;
  fechaFinalizacion: Date;
  usuarioId: number;
}

@Component({
  selector: 'app-rifa-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './rifa-page.component.html',
  styleUrls: ['./rifa-page.component.css']
})
export class RifaPageComponent implements OnInit {

  constructor(private rifaService: RifaService) {
    console.log("Start");
  }

  rifas!: RifaResponse[];

  ngOnInit() {
    console.log("Getting data");
    this.getRifaLists();
  }

  getRifaLists() {
    console.log("before entering");
    this.rifaService.getRifaList().subscribe((res: any) => {
      console.log(res);
      this.rifas = res;
    });
  }

  deleteRifa(event: any, rifaId: number) {
    if (confirm('Seguro que quieres borrar la rifa?')) {
      event.target.innerText = "Deleting..";

      this.rifaService.deleteRifa(rifaId).subscribe((res: any) => {
        this.getRifaLists();
        alert("Rifa eliminada");
      });
    }
  }
}
