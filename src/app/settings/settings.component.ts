import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  title = 'Dependency Injection Example';
  constructor(private logger: LoggerService) { //// Optional: Registering the service here
    this.logger.log('AppComponent initialized'); // Use the service
  }

}

//Different Types of Providers
// 1. providedIn: 'root' (Recommended): The service is a
// singleton and is available application-wide. This is the most commonly used and recommended practice.


// 2. Component-Level Providers: If you only want a service available to a
// specific component and its children, you can add it to the providers array in the component decorator.


// 3.Module-Level Providers: If you want a service
// available to a specific module, add it to the providers array in the module.
