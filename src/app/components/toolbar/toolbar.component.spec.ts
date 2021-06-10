import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GlobalService } from "src/app/services/global.service";
import { MovieLoadService } from "src/app/services/movie-load.service";

import { ToolbarComponent } from "./toolbar.component";

describe("ToolbarComponent", () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      providers: [MovieLoadService, GlobalService, HttpHandler, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("search should be initial first", () => {
    expect(component.searchInput).toEqual("");
  });

  it("should render titles", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".header h1").textContent).toContain(
      "OMDB Search"
    );
    expect(compiled.querySelector(".search-label").textContent).toContain(
      "Search a movie"
    );
  });
});
