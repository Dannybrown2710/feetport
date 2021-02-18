import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ROLE_URL = 'https://demo.feetport.com/public/role/test/2';
@Injectable()
export class FetchLeavesService {
  constructor(private http: HttpClient) {}
  fetchRole() {
    return this.http.get(ROLE_URL);
  }
}
