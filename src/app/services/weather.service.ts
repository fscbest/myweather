import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{

  apiKey = 'b47f900fb57d3328';
  conditionsUrl = 'http://localhost:8100/api/' + this.apiKey + '/conditions/q';
  searchUrl = 'http://localhost:8100/search/aq?query=';

  constructor(private _http:Http){
    console.log("Service connected");
  }

  getWeather(city, state){
    return this._http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

  searchCities(searchStr){
    return this._http.get(this.searchUrl+''+searchStr)
      .map(res => res.json());
  }
}
