import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  BASE_URL: string = 'https://localhost:5001/api';
  http = inject(HttpClient);
  title: string = 'DatingApp';
  users: any;

  ngOnInit(): void {
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
