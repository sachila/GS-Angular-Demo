import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-error-toast",
  templateUrl: "./error-toast.component.html",
  styleUrls: ["./error-toast.component.css"],
})
export class ErrorToastComponent {
  @Input()
  public message: string = "";

  constructor() {}
}
