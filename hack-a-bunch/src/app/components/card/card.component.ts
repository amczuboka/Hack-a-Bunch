import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() topics: any; //binding topics to the card component

  isHovered: boolean = false;

  setHovered(value: boolean): void {
    this.isHovered = value;
  }
}
