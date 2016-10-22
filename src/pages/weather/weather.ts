import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WeatherService} from "../../app/services/weather.service";

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage {
  city = "Boston";
  state = "MA";

  constructor(public navCtrl: NavController,
              private _weatherService: WeatherService) {

  }

  ngOnInit(){
     this._weatherService.getWeather(this.city, this.state)
       .subscribe(weather => {
         console.log(weather);
       });
  }
}
