import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GlobalService } from "src/app/services/global.service";
import { MovieCacheService } from "src/app/services/movie-cache.service";

import { MainPageComponent } from "./main-page.component";

describe("MainPageComponent", () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [MovieCacheService, GlobalService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("check movie components", () => {
    component.movieData = [
      {
        Title: "test",
        Poster: "",
        Type: "action",
        Year: "2020",
        imdbID: "1234",
      },
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("app-card")).toBeTruthy();
    expect(compiled.querySelector("app-movie-detail-view")).toBeFalsy();
  });

  it("show movie details", () => {
    component.movieData = [
      {
        Title: "test",
        Poster: "",
        Type: "action",
        Year: "2020",
        imdbID: "1234",
      },
    ];
    component.showDetailedMovie = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("app-card")).toBeTruthy();
    expect(compiled.querySelector("app-movie-detail-view")).toBeTruthy();
  });
});
