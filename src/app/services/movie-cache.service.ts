import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MovieDetailModel } from '../models/Movie-details-model';
import { MovieModel } from '../models/movie-model';
import { MovieResponse } from '../models/movieResponse';

@Injectable({
  providedIn: 'root',
})
export class MovieCacheService {
  private _data: MovieModel[] = [];
  private _totalResults: number = 0;
  private _searchResponse: boolean = true;
  private _searchErrorMessage: string = '';

  private _detailedMovie: MovieDetailModel | null = null;

  //event raised whenever movie data get changed
  private _movieDataChanged: Subject<MovieModel[]> = new Subject();
  public movieDataChanged: Observable<
    MovieModel[]
  > = this._movieDataChanged.asObservable();

  //event raised whenever single detailed movie get changed
  private _detailedMovieChanged: Subject<MovieDetailModel | null> = new Subject();
  public detailedMovieChanged: Observable<MovieDetailModel | null> = this._detailedMovieChanged.asObservable();

  constructor() {}

  public loadDetailedMovie(response: MovieDetailModel) {
    this._detailedMovie = response;
    this._detailedMovieChanged.next(this._detailedMovie);
  }

  public loadData(response: MovieResponse) {
    // api returning value is 'string', need to cast that to boolean
    const responseType: boolean =
      response && response.Response
        ? response.Response.toLowerCase() === 'true'
        : false;

    if (responseType) {
      this.updateData(response);
    } else {
      this.errorData(response);
    }

    // set the common cache data
    this._totalResults = Number(response.totalResults);
    this._searchResponse = responseType;
    // raise event
    this._movieDataChanged.next();
  }

  public updateData(response: MovieResponse) {
    this._data = response.Search;
  }

  public errorData(response: MovieResponse) {
    // set the error cache data
    this._data = [];
    this._searchErrorMessage = response.Error as string;
    this.clearMovieDetailData();
  }

  public clearMovieDetailData(): void {
    this._detailedMovie = null;
    // raise event
    this._detailedMovieChanged.next(this._detailedMovie);
  }

  public get movieData(): MovieModel[] {
    return this._data;
  }

  public get searchResponse(): boolean {
    return this._searchResponse;
  }

  public get searchErrorMessage(): string {
    return this._searchErrorMessage;
  }

  public get totalResults(): number {
    return this._totalResults;
  }

  public get detailedMovie(): MovieDetailModel {
    return this._detailedMovie as MovieDetailModel;
  }
}
