import { Injectable } from '@angular/core';
import { LocalStorageService } from './../localStorage/local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  private userName: string | undefined;

  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.localStorageService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.localStorageService.getToken();
    const user = jwt_decode(token!) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.localStorageService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.localStorageService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
