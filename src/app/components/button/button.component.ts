import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  constructor() {}

  @Input()
  public label?: string;

  @Output()
  public onClick: EventEmitter<void> = new EventEmitter();
}
