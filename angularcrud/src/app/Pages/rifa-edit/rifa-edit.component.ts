import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RifaService } from '../../Services/rifa.service';
import { UserService, UserRespnse } from '../../Services/user.service';

@Component({
  selector: 'app-rifa-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rifa-edit.component.html',
  styleUrls: ['./rifa-edit.component.css']
})
export class RifaEditComponent implements OnInit {

  rifaId!: any;
  rifa: any = { nombre: '', descripcion: '', fechaCreacion: '', fechaFinalizacion: '', usuarioId: '' };
  users!: UserRespnse[];

  constructor(private route: ActivatedRoute, private rifaService: RifaService, private userService: UserService) {}

  ngOnInit() {
    this.rifaId = this.route.snapshot.paramMap.get('id');
    this.rifaService.getRifa(this.rifaId).subscribe((res: any) => {
      this.rifa = res;
    });
    this.userService.getUserLists().subscribe((res: any) => {
      this.users = res;
    });
  }

  updateRifa() {
    console.log("Updating rifa with data:", this.rifa);
    this.rifaService.updateRifa(this.rifa, this.rifaId).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.error('Error updating rifa', err);
      }
    });
  }
}
