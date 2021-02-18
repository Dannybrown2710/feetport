import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const CREATE_ROLE = 'https://demo.feetport.com/public/leave';
@Injectable()
export class CreateLeaveService {

  constructor(private http: HttpClient) { }
  createLeaveRequest(data: any){
    return this.http.post(CREATE_ROLE, data);
  }
}
