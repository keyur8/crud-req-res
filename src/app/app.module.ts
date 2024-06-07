import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
