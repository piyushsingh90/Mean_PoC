import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'register',
  template: `
  <mat-card>
        <mat-card-header>
            <mat-card-title>
                Register New User
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field style="width:100%">
                    <input [(ngModel)]="registerData.email" name="email" matInput placeholder="Email" type="email">
                </mat-form-field>
                <mat-form-field style="width:100%">
                    <input [(ngModel)]="registerData.pwd" matInput placeholder="Password" name="password" type="password">
                </mat-form-field>
                <button (click)="post()" mat-raised-button color="primary">Register</button>
            </form>
        </mat-card-content>
  </mat-card>
  `
})
export class RegisterComponent {
    registerData = {};

    constructor (private apiService: ApiService) {}

    post() {
        console.log(this.registerData);
        this.apiService.sendUserRegistration(this.registerData);
    }
}
