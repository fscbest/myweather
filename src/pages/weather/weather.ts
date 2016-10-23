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
  weather = {};
  searchStr;
  results;
  constructor(public navCtrl: NavController,
              private _weatherService: WeatherService) {

  }

  ngOnInit(){
     this._weatherService.getWeather(this.city, this.state)
       .subscribe(weather => {
         this.weather = weather.current_observation;
         console.log(this.weather);
       });
  }

  getQuery(){
    this._weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }
}
