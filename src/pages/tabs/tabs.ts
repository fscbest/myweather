import { Component } from '@angular/core';

import {WeatherPage} from "../weather/weather";
import {SettingsPage} from "../settings/settings";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabWeatherRoot: any = WeatherPage;
  tabSettingsRoot: any = SettingsPage;

  constructor() {

  }
}
