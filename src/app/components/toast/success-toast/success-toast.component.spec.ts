import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SuccessToastComponent } from "./success-toast.component";

describe("SuccessToastComponent", () => {
  let component: SuccessToastComponent;
  let fixture: ComponentFixture<SuccessToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessToastComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render message", () => {
    component.message = "success message";
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".text").textContent).toContain(
      "success message"
    );
  });
});
