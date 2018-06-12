import { Component } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    {
      name: 'Tom'
    },
    {
      name: 'Chris'
    },
    {
      name: 'Matt'
    },
    {
      name: 'Jay'
    },
    {
      name: 'Amanda'
    },
  ]

  constructor() {}

  onChange(item: Item) {
    console.log('Now you can do something in this parent component with it');
  }


}
