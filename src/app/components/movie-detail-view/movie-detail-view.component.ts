import { Component, OnInit } from "@angular/core";
import { MovieDetailModel } from "src/app/models/Movie-details-model";
import { MovieCacheService } from "src/app/services/movie-cache.service";

@Component({
  selector: "app-movie-detail-view",
  templateUrl: "./movie-detail-view.component.html",
  styleUrls: ["./movie-detail-view.component.css"],
})
export class MovieDetailViewComponent implements OnInit {
  constructor(private movieCacheService: MovieCacheService) {}

  public get movie(): MovieDetailModel {
    return this.movieCacheService.detailedMovie;
  }

  public showButton: boolean = false;

  public closePreview(): void {
    this.movieCacheService.clearMovieDetailData();
  }

  ngOnInit(): void {}

  public subCategories: string[] = [
    "Director",
    "Released",
    "Genre",
    "Awards",
    "Runtime",
    "Rated",
    "Language",
  ];

  public getMovieValue(key: string) {
    const id = key as keyof MovieDetailModel;
    return this.movie[id];
  }
}
