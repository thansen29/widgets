import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContentChildren, QueryList } from '@angular/core';
import { AltTab } from './alt-tab/alt-tab.component';

@Component({
  selector: 'alt-tabs',
  templateUrl: './alt-tabs.component.html',
  styleUrls: ['./alt-tabs.component.css']
})
export class AltTabs implements OnInit, AfterContentInit {
  @ContentChildren(AltTab) tabs: QueryList<AltTab>;

  constructor() { }

  ngOnInit() {
  }

  selectTab(tab: AltTab) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }



}
