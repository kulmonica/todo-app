import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.less"]
})
export class ColorPickerComponent implements OnInit {
  @Output() onColorSelect = new EventEmitter<string>();
  @Input() inputColor: string;
  @Input() index: any;
  colorSelection: string = '#7c90c1';
  
  colors = [
    { key: "white", value: "#fff" },
    { key: "Orange", value: "#f3845b" },
    { key: "yellow", value: "#edea28" },
    { key: "green", value: "#49ed28" },
    { key: "blue", value: "#28b9ed" },
    { key: "purple", value: "#7c90c1" },
    { key: "red", value: "#ed2867" },
  ];

  constructor() {}
 

  ngOnInit(): void {
    this.inputColor = this.inputColor ? this.inputColor : "#7c90c1";
    this.index = this.index ? this.index : 0;
  }

  onColorSelection(colorSelected) {
    console.log(colorSelected);
    this.colorSelection = colorSelected.value;
    this.onColorSelect.emit(colorSelected);
  }
}
