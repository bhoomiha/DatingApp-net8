import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  http =inject(HttpClient);
  title = 'client';
  users:any; 

  ngOnInit(): void {
    this.http.get('http://localhost:5115/api/User').subscribe({
      next: response => this.users=response,
      error: error => console.log(error),
      complete: () =>console.log('Request has completed')
    })
  }

  //constructor(private httpClient:HttpClient){}
}
