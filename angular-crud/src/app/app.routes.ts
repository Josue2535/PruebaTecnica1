import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';
import { RifaPageComponent } from './Pages/rifa-page/rifa-page.component';
import { RifaEditComponent } from './Pages/rifa-edit/rifa-edit.component';
import { RifaCreateComponent } from './Pages/rifa-create/rifa-create.component';
import { BoletoPageComponent } from './Pages/boleto-page/boleto-page.component';
import { BoletoCreateComponent } from './Pages/boleto-create/boleto-create.component';
import { BoletoEditComponent } from './Pages/boleto-edit/boleto-edit.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home Page'},
    {path: 'users/addUser', component: UserCreateComponent, title: 'Creacion de Usuario'},
    {path: 'users/:id/editUser', component: UserEditComponent, title: 'Edicion de Usuario'},
    {path: 'users', component: UserPageComponent, title: 'Lista de Usuarios'},
    {path: 'rifas/addRifa', component: RifaCreateComponent, title: 'Creacion de Rifa'},
    {path: 'rifas/:id/editRifa', component: RifaEditComponent, title: 'Edicion de Rifa'},
    {path: 'rifas', component: RifaPageComponent, title: 'Lista de Rifas'},
    {path: 'boletos', component: BoletoPageComponent, title: 'Lista de Boletos'},
    {path: 'boletos/addBoleto', component: BoletoCreateComponent, title: 'Creacion de Boleto'},
    {path: 'boletos/:id/editBoleto', component: BoletoEditComponent, title: 'Edicion de Boletos'},


];
