import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs/internal/observable/of";
import { MovieCacheService } from "src/app/services/movie-cache.service";

import { MovieDetailViewComponent } from "./movie-detail-view.component";

describe("MovieDetailViewComponent", () => {
  let component: MovieDetailViewComponent;
  let fixture: ComponentFixture<MovieDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailViewComponent],
      providers: [MovieCacheService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  xit("check movie components", () => {
    const movie = {
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

    const spy = jasmine.createSpyObj("MovieCacheService", ["_detailedMovie"]);
    spy.getValue.and.returnValue(movie);

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector(".detail-container h4").textContent
    ).toContain("test");
  });
});
