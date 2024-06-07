import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/users', user);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }
  
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl  + '/users');
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


  isLoggedIn(): boolean {
    // Replace with your actual authentication logic
    // return this.http.delete<any>(`${this.apiUrl}+ '/users' + /${id}`);
    return !!localStorage.getItem('token');
  }

  login(token: string): Observable<any> {
    localStorage.setItem('token', token);
    alert('1')
    return this.http.get<any>(this.apiUrl  + '/login');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
