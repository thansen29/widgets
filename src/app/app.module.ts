import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Tabs } from './tabs/tabs.component';
import { Tab } from './tabs/tab/tab.component';
import { AltTabs } from './alt-tabs/alt-tabs.component';
import { AltTab } from './alt-tabs/alt-tab/alt-tab.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    Tabs,
    Tab,
    AltTabs,
    AltTab,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
