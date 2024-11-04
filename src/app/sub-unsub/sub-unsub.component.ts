import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { DataServiceService } from '../../services/data-service.service';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sub-unsub',
  standalone: true,
  imports: [],
  templateUrl: './sub-unsub.component.html',
  styleUrl: './sub-unsub.component.css'
})
export class SubUnsubComponent implements OnInit, OnDestroy {
  data: any;
  private subscription: Subscription | undefined;

  private destroy$ = new Subject<void>();


  data$: Observable<any>; //3 way


  constructor(private myService: DataServiceService) {

    this.data$ = this.myService.getData(); // Async pipe handles subscription //3 Way


  }

  ngOnInit() {
    this.myService.getData().subscribe(result => {
      this.data = result;
    });


    //seocnd way takeUntil Operator

    this.myService.getData().pipe( //2nd way
      takeUntil(this.destroy$)
    ).subscribe(result => {
      this.data = result;
    });

  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Unsubscribe to prevent memory leaks


      //second way
      this.destroy$.next(); // Emit a value to complete the observable
      this.destroy$.complete(); // Close the observable stream
    }
  }



  //Angular automatically unsubscribes from observables when you use the async pipe,



}
