import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-success-toast",
  templateUrl: "./success-toast.component.html",
  styleUrls: ["./success-toast.component.css"],
})
export class SuccessToastComponent {
  @Input()
  public message: string = "";
  constructor() {}
}
