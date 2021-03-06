import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ErrorToastComponent } from "./error-toast.component";

describe("ErrorToastComponent", () => {
  let component: ErrorToastComponent;
  let fixture: ComponentFixture<ErrorToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorToastComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render message", () => {
    component.message = "error message";
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".text").textContent).toContain(
      "error message"
    );
  });
});
