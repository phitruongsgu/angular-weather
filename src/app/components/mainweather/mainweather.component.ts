import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-mainweather',
  templateUrl: './mainweather.component.html',
  styleUrls: ['./mainweather.component.css']
})
export class MainweatherComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  data:any;
  //q:any="Thanh Pho Ho Chi Minh, VietNam";
  ngOnInit(): void {
    //this.getWeather(this.q);
  }
  check:boolean=false; // khi mới build thì mình chưa có nhập gì vào input cả, nên sẽ bật cờ check = false;

  getEvent(event2:String){
    console.log(event2);
    this.getWeather(event2);
    if(event2 != ""){
      this.check = true; // sau khi đã nhập data vào input *ngIf="check" bên mainweather.component.html
    }
  }
  getWeather(s:String){
    this.weatherService.getWeatherData(s).subscribe(response=>{
      console.log(response)
      // biến response chứa tất cả data của api đó về, muốn biết thì coi console log
        this.data = response;
        console.log(this.data)
        this.data.main.temp_min = (this.data.main.temp_min - 273.15).toFixed(0);
        this.data.main.temp_max = (this.data.main.temp_max - 273.15).toFixed(0);
        this.data.weather = this.data.weather[0].description;
        this.data.wwind = this.data.wind.deg; // data.wind.deg là từ khoá trong data của API
        this.data.sp = (this.data.wind.speed * 3.6).toFixed(0);

    },
    (error)=>{
      alert("invalid city: " + s)
    })
  }
}
