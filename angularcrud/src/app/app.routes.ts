import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home Page'},
    {path: 'users/addUser', component: UserCreateComponent, title: 'User Create'},
    {path: 'users/:id/editUser', component: UserEditComponent, title: 'User Edit'},
    {path: 'users', component: UserPageComponent, title: 'Users Page'}
    /*{path: '/addRifa', component: HomeComponent, title: 'Home Page'},
    /*{path: '/editRifa', component: HomeComponent, title: 'Home Page'},
    {path: '/viewRifa', component: HomeComponent, title: 'Home Page'},
    {path: '/addBoleto', component: HomeComponent, title: 'Home Page'},
    {path: '/editBoleto', component: HomeComponent, title: 'Home Page'},
    {path: '/viewBoleto', component: HomeComponent, title: 'Home Page'},*/

];
