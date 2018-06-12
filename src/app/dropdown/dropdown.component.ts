import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() items: Item[];
  @Output() onChange = new EventEmitter<any>()

  isOpen = false;
  selected = "Dropdown example";

  constructor() { }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  blurDropdown() {
    this.isOpen = false;
  }

  selectItem(item: Item) {
    this.isOpen = false;
    this.selected = item.name;

    this.onChange.emit(item);

  }

}
