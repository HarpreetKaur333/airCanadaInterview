import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectService } from './authService.service';

describe('BehaviorSubjectService', () => {
  let service: BehaviorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
