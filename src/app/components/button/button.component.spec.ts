import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("check label", () => {
    component.label = "text";
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("button").textContent).toContain("text");
  });
});
