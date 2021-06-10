import { HttpClient, HttpHandler } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { MovieResponse } from "../models/movieResponse";
import { MovieCacheService } from "./movie-cache.service";

import { MovieLoadService } from "./movie-load.service";
import { RemoteService } from "./remote.service";

const movieResponse: MovieResponse = {
  Search: [
    {
      Title: "test",
      Poster: "",
      Type: "action",
      Year: "2020",
      imdbID: "1234",
    },
  ],
  Response: "true",
  totalResults: "1",
  Error: "error",
};

const movieDetail = {
  Title: "test",
  Year: "2323",
  Rated: "1",
  Released: "2020",
  Poster: "",
  Plot: "",
  Actors: "actor 1",
  Ratings: [{ Source: "imdb", Value: "10" }],
  Director: "director 1",
  Writer: "",
  Genre: "",
  Runtime: "",
  Language: "",
  Awards: "",
};

describe("MovieLoadService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RemoteService, HttpClient, MovieCacheService, HttpHandler],
    })
  );

  it("should be created", () => {
    const service: MovieCacheService = TestBed.get(MovieCacheService);
    expect(service).toBeTruthy();
  });

  it("error data", () => {
    const service: MovieCacheService = TestBed.get(MovieCacheService);
    service.errorData(movieResponse);

    expect(service.movieData).toEqual([]);
  });

  it("load data", () => {
    const service: MovieCacheService = TestBed.get(MovieCacheService);
    service.loadData(movieResponse);

    expect(service.movieData).toEqual(movieResponse.Search);

    // error response
    const errorResponse = { ...movieResponse, Response: "false" };
    service.loadData(errorResponse);

    expect(service.movieData).toEqual([]);
  });

  it("load movie details", () => {
    const service: MovieCacheService = TestBed.get(MovieCacheService);
    service.loadDetailedMovie(movieDetail);

    expect(service.detailedMovie).toEqual(movieDetail);
  });
});
