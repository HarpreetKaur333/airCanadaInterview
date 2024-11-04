import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  name = '';
  oneWayBinding = 'Interpolation (One-way data binding from component to view)'; // The value to be displayed

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg'; // URL of the image

  onButtonClick() {
    alert('Button clicked!');
  }


}
