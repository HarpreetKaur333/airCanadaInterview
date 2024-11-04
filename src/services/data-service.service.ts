import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  // /Create a Service to Return an Observable
  constructor(private http: HttpClient) { }


  getData(): Observable<string> {
    return of('Data loaded successfully'); // Emits a single value and completes
  }


  //Handling HTTP Requests with Observables
  getPosts(): Observable<any> {
   return this.http.get<any>(this.apiUrl);


   //error handling
    // this.http.get('api/data').pipe(
    //   catchError(error => {
    //     console.error(error);
    //     return throwError(() => new Error('An error occurred'));
    //   })
    // ).subscribe({
    //   next: data => console.log(data),
    //   error: err => alert(err.message)
    // });
  }

  // Example of Observable Creation
  // const observable = new Observable<number>(observer => {
  //   observer.next(1);    // Emits a value of 1
  //   observer.next(2);    // Emits a value of 2
  //   observer.complete(); // Ends the observable stream
  // });

  // Example of Observer
  // const observer = {
  //   next: (value) => console.log(`Received value: ${value}`),
  //   error: (error) => console.error(`Error: ${error}`),
  //   complete: () => console.log('Observable completed'),
  // };


//   all together

//   // Create an observable
// const observable = new Observable<number>(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.complete();
// });

// // Define the observer
// const observer = {
//   next: (value) => console.log(`Received value: ${value}`),
//   error: (error) => console.error(`Error: ${error}`),
//   complete: () => console.log('Observable completed'),
// };

// // Subscribe the observer to the observable
// observable.subscribe(observer);

}
