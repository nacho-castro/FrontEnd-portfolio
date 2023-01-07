import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.css']
})
export class LogButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.btnClick.emit();
  }
}
