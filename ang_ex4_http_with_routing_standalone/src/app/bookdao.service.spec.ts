import { TestBed } from '@angular/core/testing';

import { BookdaoService } from './bookdao.service';

describe('BookdaoService', () => {
  let service: BookdaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookdaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
