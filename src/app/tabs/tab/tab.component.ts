import { Component, OnInit, Input } from '@angular/core';
import { Tabs } from '../tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab implements OnInit {
  @Input() tabTitle: string;
  active: boolean;

  constructor(private tabs: Tabs) { 
    tabs.addTab(this);
  }

  ngOnInit() {
  }

}
