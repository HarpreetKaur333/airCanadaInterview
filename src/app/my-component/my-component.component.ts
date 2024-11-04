import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, Pipe, PipeTransform, SimpleChanges, ViewChild } from "@angular/core";
import { CapitalizePipe } from "../customPipe/capitalize.pipe";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CapitalizePipe,CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent  implements OnInit, OnChanges, OnDestroy,AfterViewInit  {


  message: string = 'hello from mycomponent for air canada interview!';

  today: Date = new Date();
  @Input() inputData: string | undefined;
  @ViewChild('viewChildRef') viewChild: any;
  //pipes in angular

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    console.log('Component initialized');
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('Input property changed:', changes);
  }

  ngOnDestroy() {
    console.log('Component is being destroyed');
  }


  ngAfterViewInit() {
    console.log('View initialized', this.viewChild);


    // ngAfterContentInit() {
    //   console.log('Content projection initialized');
    // }
  }
  // ngAfterContentInit(): void {
  //   throw new Error("Method not implemented.");
  // }
}

// function ngAfterContentInit() {
//   throw new Error("Function not implemented.");
// }



//1. Component Directive
// A Component is a directive with a template, which defines
//  the view and behavior of a part of the UI. Components are the most common type of directive in Angular.

//2 Attribute Directive

// constructor(private el: ElementRef, private renderer: Renderer2) {}

// @HostListener('mouseenter') onMouseEnter() {
//   this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
// }

// @HostListener('mouseleave') onMouseLeave() {
//   this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
// }


// 3 3. Structural Directive
// A Structural Directive modifies the structure of the DOM by adding or removing elements.
// Angular’s built-in structural
// directives include *ngIf, *ngFor, and *ngSwitch.
