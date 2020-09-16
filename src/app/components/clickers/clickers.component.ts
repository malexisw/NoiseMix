import { Component, OnInit } from '@angular/core';
import { Sound } from 'src/app/models/Sound.model';
import { SoundService } from 'src/app/services/sound.service';


@Component({
  selector: 'app-clickers',
  templateUrl: './clickers.component.html',
  styleUrls: ['./clickers.component.scss']
})
export class ClickersComponent implements OnInit {

  sounds: Sound[] = [];

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    //initialise the sounds
    this.initSound()
  }

  //create and get the sounds
  initSound(){
    this.soundService.createSound()
    this.sounds = this.soundService.getSound()
  }

  //play the sound selected
  playAudio(sound: Sound){
      if(!sound.play){
        sound.audio.load();
        sound.audio.volume = this.getVolume(sound)
        sound.audio.play();
        sound.audio.loop = true
      } else {
        sound.audio.pause();
        sound.audio.currentTime = 0;
      }
    sound.play = !sound.play;
    this.setSound(sound)  
  }

  //Change the volume on change
  onChange(evt, sound: Sound){
    sound.audio.volume = evt.value / 100;
    sound.volume = sound.audio.volume;
    this.setSound(sound)
  }

  //modify the sound of the object to the sound selected 
  setSound(sound: Sound){
    for(let i=0;i<this.sounds.length;i++){
      if(this.sounds[i].name == sound.name){
        this.sounds[i] = sound
      }
    }
  }

  //get the volume of the sound selected
  getVolume(sound: Sound){
    for(let i=0;i<this.sounds.length;i++){
      if(this.sounds[i].name == sound.name){
        return this.sounds[i].volume
      }
    }
  }

  //modify the class when the sound is active or not
  btn(sound: Sound){
    if(!sound.play){
      return "btn disabled"
    } else {
      return "btn abled"
    }
  }
}
