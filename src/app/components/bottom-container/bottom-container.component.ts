import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-bottom-container",
  templateUrl: "./bottom-container.component.html",
  styleUrls: ["./bottom-container.component.css"],
})
export class BottomContainerComponent {
  @Input()
  public label?: string;

  @Input()
  public year?: string;

  @Input()
  public showButton: boolean = true;

  @Output()
  public onClick: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
