import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{

  apiKey = 'b47f900fb57d3328';
  conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  constructor(private _http:Http){
    console.log("Service connected");
  }

  getWeather(city, state){
    return this._http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }
}
