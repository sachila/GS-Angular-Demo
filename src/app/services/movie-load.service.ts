import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MovieDetailModel } from '../models/Movie-details-model';
import { MovieModel } from '../models/movie-model';
import { MovieResponse } from '../models/movieResponse';
import { MovieCacheService } from './movie-cache.service';
import { RemoteService } from './remote.service';

@Injectable({
  providedIn: 'root',
})
export class MovieLoadService {
  constructor(
    private remoteService: RemoteService,
    private movieCacheService: MovieCacheService
  ) {}

  public searchByName(search: string) {
    this.remoteService
      .get<MovieResponse>(`s=${search}`)
      .subscribe((result: MovieResponse) => {
        // update the cache service
        this.movieCacheService.loadData(result);
      });
  }

  public searchByTitle(title: string) {
    this.remoteService
      .get<MovieDetailModel>(`t=${title}`)
      .subscribe((result: MovieDetailModel) => {
        this.movieCacheService.loadDetailedMovie(result);
      });
  }
}
