import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AuthLoginModel } from "src/app/shared/models/authLogin.model";
import { User } from "src/app/shared/models/user.model";

@Injectable({
    providedIn:'root'
})

export class AuthService {
    constructor(private http : HttpClient) {

    }
/* Sample plain javascript request  */
    login(username:string, password:string): Observable<AuthLoginModel>{
        const url = 'https://fakestoreapi.com/auth/login';
        return this.http.post<AuthLoginModel>(url, {username, password})
    }

    formatedUser(user:any) {
           return new User(user.username, user.token, user.expiryTime)
    }
}