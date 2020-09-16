import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private date= new Date
  
  private day: string[] = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  private month: string[] = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']

  public dateHours: any
  public dateMinute: string
  public dateSecond: string
  public dateNumDay: Number
  public dateDay: string
  public dateMonth: string

  public background: object

  constructor() {
  }
    

  ngOnInit(): void {

    //set the date
    this.updateDate(this.date)

    //modify the date every 1000ms
    setInterval(() => {
      const date = new Date
      this.updateDate(date)
    }, 1000)

    //get the day
    this.dateDay = this.day[this.date.getDay()];

    //get the number of the day
    this.dateNumDay = this.date.getDate();

    //get the month
    this.dateMonth = this.month[this.date.getMonth()];
  
  }

  //set the hour, minute, seconds of the day
  private updateDate(date: Date){
    this.dateHours = date.getHours()

    this.dateHours = this.dateHours < 10 ? '0' + this.dateHours : this.dateHours; 

    const minutes = date.getMinutes();
    this.dateMinute = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.dateSecond = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
