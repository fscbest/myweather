import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WeatherService} from "../../app/services/weather.service";

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage {

  constructor(public navCtrl: NavController,
              private _weatherService: WeatherService) {

  }

}
