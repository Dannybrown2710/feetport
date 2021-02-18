import { Permission } from './user.model';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(  
        private authService: AuthService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const role = this.authService.getRole();
        if(!role) {
            return this.authService.fetchUserDetails().pipe(map(res => {
                this.authService.setUserData(res[0]);
                return this.parsePermissions(res[0].actions[0].permission, route);
            }));
        } else {
            return this.parsePermissions(JSON.parse(role).actions[0].permission, route);
        }
    }

    parsePermissions(permissions: Permission[], route: ActivatedRouteSnapshot) {
        return !!permissions.find(permission => permission.name === route.data.selector && permission.isPermit)
    }
}
