import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.url)
  }

  postUser(data: any) {
    return this.http.post(this.url, data)
  }

  deleteUser(id: any) {
    return this.http.delete(this.url + "/" + id)
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/users/${id}`, data)
  }
  
}
