import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alt-tab',
  templateUrl: './alt-tab.component.html',
  styleUrls: ['./alt-tab.component.css']
})
export class AltTab implements OnInit {
  active: boolean;
  @Input() tabTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
