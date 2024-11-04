import { Injectable, Optional } from '@angular/core';
import { LoggerService } from './logger.service';

// /Advanced Dependency Injection Concepts
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private logger: LoggerService,
    @Optional() private logger1?: LoggerService
  ) {
    this.logger.log('ApiService initialized');

    if (this.logger1) {
      this.logger1.log('AppComponent initialized');
    }
  }
}
//Optional Injection:
//You can mark dependencies as optional, so if the service is not provided, Angular will not throw an error.

// Injecting Services into Other Services:
//  You can inject one service into another service by declaring it in the constructor of the second service.
