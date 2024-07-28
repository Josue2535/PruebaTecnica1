import { Component } from '@angular/core';
import { BoletoService, BoletoResponse } from '../../Services/boleto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boleto-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './boleto-page.component.html',
  styleUrls: ['./boleto-page.component.css']
})
export class BoletoPageComponent {

  boletos!: BoletoResponse[];

  constructor(private boletoService: BoletoService) {}

  ngOnInit() {
    this.getBoletoLists();
  }

  getBoletoLists() {
    this.boletoService.getBoletoLists().subscribe((res: any) => {
      this.boletos = res;
    });
  }

  deleteBoleto(event: any, boletoId: number) {
    if (confirm('¿Seguro que quieres eliminar el boleto?')) {
      event.target.innerText = "Eliminando...";
      this.boletoService.deleteBoleto(boletoId).subscribe(() => {
        this.getBoletoLists();
        alert("Boleto eliminado");
      });
    }
  }
}
