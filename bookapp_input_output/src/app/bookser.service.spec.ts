import { TestBed } from '@angular/core/testing';

import { BookserService } from './bookser.service';

describe('BookserService', () => {
  let service: BookserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
