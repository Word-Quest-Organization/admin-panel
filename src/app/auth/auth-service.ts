import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    console.log(email, password);

    return this.http.post(`${this.API_URL}/login`, { email, password });
  }

  register({ name, email, password }: { name: string; email: string; password: string }) {
    return this.http.post(`${this.API_URL}/register`, {
      name,
      email,
      password,
      role: 'ADMIN',
    });
  }
}
