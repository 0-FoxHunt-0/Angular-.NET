import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  BASE_URL: string = 'https://localhost:5001/api';
  http = inject(HttpClient);
  private accountService = inject(AccountService);
  title: string = 'DatingApp';
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  getUsers() {
    this.http.get(`${this.BASE_URL}/users`).subscribe({
      next: (response) => {
        this.users = response;
        console.log(response);
      },
      error: (error) => console.error(error),
      complete: () => console.log('Request has been completed'),
    });
  }
}
