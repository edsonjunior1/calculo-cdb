import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Output() resetEvent = new EventEmitter<boolean>();
  @Input() grossProfit!: number;
  @Input() netProfit!: number;


  public reset() {
    this.resetEvent.emit(true);
  }

}
