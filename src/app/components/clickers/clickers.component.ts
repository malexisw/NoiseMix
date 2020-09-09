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
    this.initSound()
  }

  initSound(){
    this.soundService.createSound()
    this.sounds = this.soundService.getSound()
  }

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

  onChange(evt, sound: Sound){
    sound.audio.volume = evt.value / 100;
    sound.volume = sound.audio.volume;
    this.setSound(sound)
  }

  setSound(sound: Sound){
    for(let i=0;i<this.sounds.length;i++){
      if(this.sounds[i].name == sound.name){
        this.sounds[i] = sound
      }
    }
  }

  getVolume(sound: Sound){
    for(let i=0;i<this.sounds.length;i++){
      if(this.sounds[i].name == sound.name){
        return this.sounds[i].volume
      }
    }
  }

  btn(sound: Sound){
    if(!sound.play){
      return "btn disabled"
    } else {
      return "btn abled"
    }
  }
}
