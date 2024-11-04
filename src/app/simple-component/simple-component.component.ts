import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-component',
  standalone: true,
  imports: [],
  templateUrl: './simple-component.component.html',
  styleUrl: './simple-component.component.css'
})
export class SimpleComponentComponent {
  @Input() message: string = 'Initial Message';

  constructor(private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  navigateToSimple() {
    this.router.navigate(['/simple-component']);
  }

  updateMessage() {
    // Without explicit change detection, the view won't update in OnPush mode
    this.message = 'Updated Message';
  }

  triggerChangeDetection() {
    // Manually trigger change detection
    this.cdr.markForCheck();
  }





  // Decorators in Angular

  // @Component: Declares a class as an Angular component, providing metadata such as
  //  the selector, template, and styles.

  // @Injectable: Declares a class as a service and makes it available for dependency injection.
  // Services decorated with
  // @Injectable({ providedIn: 'root' }) are provided at the root level,

  // @Input: Used to define an input property in a child component, allowing data to be
  //  passed from a parent component.

  // @Output: Used to define an output property in a child component,
  // allowing the child to emit events that a parent component can listen to.

  // @NgModule: Declares a class as an Angular module, bundling components, directives, pipes,
  // and services into a cohesive unit.


}
