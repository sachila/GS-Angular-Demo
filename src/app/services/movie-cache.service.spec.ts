import { TestBed } from '@angular/core/testing';

import { MovieCacheService } from './movie-cache.service';

describe('MovieCacheService', () => {
  let service: MovieCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
