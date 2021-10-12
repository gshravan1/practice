import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public fromParent: any;
  public name = "This is Interpolation";
  public testId = "This is Property Binding";

  public myTextColor = "TextColor";
  public myTextSize = "TextSize";
  public required = "true";
  public Group = {
    "TextColor":this.required,
    "TextSize":this.required,
    "TextStyle":this.required
  }

  public myColor = "orange";
  public myStyles = {
    color : "blue",
    fontStyle: "italic"
  }

  public greetings = "";

  public data = "";

  public direct = "ngIf Directive";

  public objects = ["HTML", "CSS", "Angular"];

  
  constructor() { }


  ngOnInit(): void {
  }

  onClick() {
    this.greetings="This is Event Binding";
  }
}
