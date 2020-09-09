import { Component,Inject,OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'NoiseMix';
  background: string;

  constructor( @Inject(DOCUMENT) private _document: Document) {}

  ngOnInit() {
    this.getBackground()
    
    this._document.querySelector("body").style.background = this.background
    this._document.querySelector("body").style.backgroundSize = "cover"
    this._document.querySelector("body").style.backgroundAttachment = "fixed"
  }

  public getBackground(){ 
    const date = new Date
    const hours = date.getHours()
    if(hours >= 0 && hours <= 12){
      this.background = 'url(../assets/morning.jpg) no-repeat'
    } else if (hours >= 13 && hours <= 18){
      this.background = 'url(../assets/afternoon.jpg) no-repeat'
    } else {
      this.background = 'url(../assets/nightfall.jpg) no-repeat'
    }
  }
}
