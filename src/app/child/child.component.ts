import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message: string = ''; // Use @Input to receive data from the parent


  @Output() messageEvent = new EventEmitter<string>(); // Use @Output with EventEmitter

  sendMessage() {
    this.messageEvent.emit('Hello from Child!'); // Emit a message to the parent
  }

}
