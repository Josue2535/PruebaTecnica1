import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserRespnse{
  id: number,
  nombre:string,
  email:string

}

export interface UserEditRespnse{
  status:Number,
  user: Object
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9300/usuario';
  private httpClient = inject(HttpClient);

  saveUser(inputData: object): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/`, inputData);
  }
  getUserLists(){
    return this.httpClient.get(`${this.apiUrl}/findAll`);
  }

  getStudent(userId:string){
    return this.httpClient.get(`${this.apiUrl}/${userId}`);
  }

  updateUser(inputData:Object, userId:number){
    return this.httpClient.put(`${this.apiUrl}/${userId}`,inputData);
  }

  deleteUser(userId:Number){
    return this.httpClient.delete(`${this.apiUrl}/${userId}`);
  }
}
