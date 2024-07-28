import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RifasComponent } from '../app/components/rifas/rifas.component';
import { RifaDetailComponent } from '../app/rifa-detail/rifa-detail.component';
//import { CrearRifaComponent } from '../app/crear-rifa/crear-rifa.component';
//import { BoletosComponent } from '../app/components/boletos/boletos.component';
//import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/rifas', pathMatch: 'full' },
  { path: 'rifas', component: RifasComponent },
  { path: 'rifa/:id', component: RifaDetailComponent },
  //{ path: 'crear-rifa', component: CrearRifaComponent },
  //{ path: 'boletos', component: BoletosComponent },
  //{ path: 'usuarios', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
