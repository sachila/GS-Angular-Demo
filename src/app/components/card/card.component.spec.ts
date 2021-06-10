import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MovieLoadService } from "src/app/services/movie-load.service";
import { RemoteService } from "src/app/services/remote.service";
import { CardComponent } from "./card.component";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [MovieLoadService, RemoteService, HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("check movie components", () => {
    component.movie = {
      Title: "test",
      Poster: "",
      Type: "action",
      Year: "2020",
      imdbID: "1234",
    };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".title-container h4").textContent).toContain(
      "test"
    );
  });
});
