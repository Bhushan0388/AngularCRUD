import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclinet: HttpClient) { }

  postEmployee(data: any) {
    return this.httpclinet.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }

  getEmployeedata() {
    return this.httpclinet.get("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }

  updateEmployee(data: any, id: number) {
    return this.httpclinet.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  deleteEmployee(id: number) {
    return this.httpclinet.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res: any) => {
      return res;
    }))
  }
}
