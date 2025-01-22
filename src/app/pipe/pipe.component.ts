import { Component } from '@angular/core';
import { TruncatePipePipe } from '../truncate-pipe.pipe';
import { ImpurePipePipe } from '../impure-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports:  [TruncatePipePipe, FormsModule, CommonModule, ImpurePipePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  transform(value: string, limit: number = 20): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
  longText: string = 'This is a very long text that should be truncated';

  searchText: string = '';
  items = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' },
    { name: 'Pineapple' },
  ];


}
