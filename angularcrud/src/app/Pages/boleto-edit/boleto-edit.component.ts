import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BoletoService } from '../../Services/boleto.service';
import { UserService, UserRespnse } from '../../Services/user.service';
import { RifaService, RifaResponse } from '../../Services/rifa.service';

@Component({
  selector: 'app-boleto-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './boleto-edit.component.html',
  styleUrls: ['./boleto-edit.component.css']
})
export class BoletoEditComponent implements OnInit {

  boletoId!: any;
  boleto: any = { numero: '', rifaId: '', usuarioId: '' };
  rifas!: RifaResponse[];
  users!: UserRespnse[];

  constructor(private route: ActivatedRoute, private boletoService: BoletoService, private userService: UserService, private rifaService: RifaService) {}

  ngOnInit() {
    this.boletoId = this.route.snapshot.paramMap.get('id');
    this.boletoService.getBoleto(this.boletoId).subscribe((res: any) => {
      this.boleto = res;
    });

    this.rifaService.getRifaList().subscribe((res: any) => {
      this.rifas = res;
    });

    this.userService.getUserLists().subscribe((res: any) => {
      this.users = res;
    });
  }

  updateBoleto() {
    console.log("Updating boleto with data:", this.boleto);
    this.boletoService.updateBoleto(this.boleto, this.boletoId).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.error('Error actualizando boleto', err);
      }
    });
  }
}
