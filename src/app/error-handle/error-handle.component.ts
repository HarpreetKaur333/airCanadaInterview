import { Component, Directive, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-error-handle',
  standalone: true,
  imports: [],
  templateUrl: './error-handle.component.html',
  styleUrl: './error-handle.component.css'
})
export class ErrorHandleComponent {


  // Custom Directives, Host Listeners, and Host Bindings
  // bgColor:'' | undefined;
  @Directive({
    selector: '[appHighlight]'
  })

    @HostBinding('style.backgroundColor')bgColor: string|undefined;

    @HostListener('mouseenter') onMouseEnter() {
      this.bgColor = 'yellow';
    }


}
