import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor( private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  token: string = '';

  login(): void {
    if (this.loginForm.valid) {
      this.http.post('https://reqres.in/api/login', this.loginForm.value)
        .subscribe((response:any) => {
          this.router.navigate(['/users']);
          console.log('Login successful', response);
          localStorage.setItem('token',response?.token)
        }, error => {
          console.error('Login failed', error);
        });
    }
  }
}
