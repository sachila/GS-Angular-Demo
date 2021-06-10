import { Component, Input, OnInit } from "@angular/core";
import { MovieModel } from "src/app/models/movie-model";
import { MovieLoadService } from "src/app/services/movie-load.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input()
  public movie?: MovieModel;

  constructor(private movieLoadService: MovieLoadService) {}

  ngOnInit(): void {}

  public openDetailView(): void {
    if (this.movie) {
      this.movieLoadService.searchByTitle(this.movie.Title);
    }
  }
}
