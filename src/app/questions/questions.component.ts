import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule,BrowserModule  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent  implements OnInit{
  constructor(private dataService: DataServiceService,
  ) {}
  message: string = '';
  posts: any[] = [];
  // /Example of a Promise in Angular
  ngOnInit() {
    this.fetchData().then((data) => {
      this.message = data;
    });


    //getData comes from dataService as obervable
    this.dataService.getData().subscribe({
      next: (data) => (this.message = data), // Assign the emitted data to `message`
      complete: () => console.log('Observable completed'),
    });

//http request
this.dataService.getPosts().subscribe((data) => {
  this.posts = data;
});


  }

  fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data loaded successfully');
      }, 2000);
    });
  }




//   Choosing Between Observables and Promises
// Use Observables when you need multiple values over time (e.g., real-time data updates,
//    event listeners, or asynchronous HTTP requests in Angular).
// Use Promises for single, non-repeating values (e.g., a one-time data fetch).

// Advantages of Observables Over Promises
// Multiple Emissions: Observables can emit multiple values over time, making them ideal for streaming data.
// Operators: Observables support operators such as map, filter, debounce, retry, and more,
// allowing powerful data transformations.
// Cancelation: Observables can be unsubscribed from, which stops them from emitting further data.




}
