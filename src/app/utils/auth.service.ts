import { Permission, UserObj } from './user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const ROLE_URL = 'https://demo.feetport.com/public/role/test/';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy{
    subscriptions = new Subscription();

    userPermissionsReceived = new BehaviorSubject<Permission[]>([]);

    constructor(private http: HttpClient) {}

    getRole() {
        const role = sessionStorage.getItem('role');
        if(role) {
            this.setUserData(JSON.parse(role))
        }
        return role;
    };

    fetchUserDetails() {
        // Change the id here
        const roleId = 2;
        return this.http.get<UserObj[]>(ROLE_URL + roleId);
    }

    setUserData(role: UserObj) {
        sessionStorage.setItem('role', JSON.stringify(role));
        this.userPermissionsReceived.next(role.actions[0].permission);
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}