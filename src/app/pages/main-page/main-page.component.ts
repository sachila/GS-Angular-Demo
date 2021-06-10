import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieDetailModel } from 'src/app/models/Movie-details-model';
import { MovieModel } from 'src/app/models/movie-model';
import { GlobalService } from 'src/app/services/global.service';
import { MovieCacheService } from 'src/app/services/movie-cache.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public showDetailedMovie: boolean = false;
  private subscriptions: Subscription[] = [];
  public movieData: MovieModel[] = [];

  constructor(
    private movieCacheService: MovieCacheService,
    private globalService: GlobalService
  ) {
    // when data get updated, listen to events and update the component data
    this.subscriptions.push(
      this.movieCacheService.movieDataChanged.subscribe(() => {
        this.movieData = this.movieCacheService.movieData;
      })
    );

    this.subscriptions.push(
      this.movieCacheService.detailedMovieChanged.subscribe((detailedMovie) => {
        if (detailedMovie) {
          this.showDetailedMovie = true;
          this.movieData = this.movieCacheService.movieData.filter(
            (movie) => movie.Title !== detailedMovie.Title
          );
        } else {
          this.showDetailedMovie = false;
          this.movieData = this.movieCacheService.movieData;
        }
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  public get searchTrigger(): boolean {
    return this.globalService.searchTrigger.value;
  }

  public get movieResult(): number {
    return this.movieCacheService.totalResults;
  }

  public get searchResponse(): boolean {
    return this.movieCacheService.searchResponse;
  }

  public get searchErrorMessage(): string {
    return this.movieCacheService.searchErrorMessage;
  }
}
