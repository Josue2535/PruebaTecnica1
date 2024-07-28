import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BoletoService } from '../../Services/boleto.service';
import { UserService, UserRespnse } from '../../Services/user.service';
import { RifaService, RifaResponse } from '../../Services/rifa.service';

@Component({
  selector: 'app-boleto-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './boleto-create.component.html',
  styleUrls: ['./boleto-create.component.css']
})
export class BoletoCreateComponent implements OnInit {

  boleto: any = { numero: '', rifaId: '', usuarioId: '' };
  rifas!: RifaResponse[];
  users!: UserRespnse[];

  constructor(private boletoService: BoletoService, private userService: UserService, private rifaService: RifaService) {}

  ngOnInit() {
    this.rifaService.getRifaList().subscribe((res: any) => {
      this.rifas = res;
    });

    this.userService.getUserLists().subscribe((res: any) => {
      this.users = res;
    });
  }

  saveBoleto() {
    if (!this.rifas.length || !this.users.length) {
      alert('No se puede crear el boleto. Asegúrese de que hay rifas y usuarios disponibles.');
      return;
    }
    this.boletoService.saveBoleto(this.boleto).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.error('Error creando boleto', err);
      }
    });
  }
}
