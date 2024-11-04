import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponent implements OnInit {
  userId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}

