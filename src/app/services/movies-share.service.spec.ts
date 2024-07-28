import { TestBed } from '@angular/core/testing';

import { MoviesShareService } from './movies-share.service';

describe('MoviesShareService', () => {
  let service: MoviesShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
