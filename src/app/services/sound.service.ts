import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sound } from '../models/Sound.model';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  sounds: Sound[] = [];
  soundsSubject = new Subject<Sound[]>();

  soundPath: string[] = ['CityStreet.mp3','CoffeeShop.mp3','Criket.mp3','Fire.mp3','Fireworks.mp3','Forest.mp3','Rain.mp3','RainWindow.mp3','River.mp3','Sea.mp3','Thunder.mp3','Train.mp3','Underwater.mp3','Wind.mp3']
  soundLogo: string[] = ['city', 'coffee', 'bug', 'fire','burn', 'tree', 'cloud-rain', 'cloud-sun-rain', 'tint', 'water', 'bolt', 'train', 'fish', 'wind'];
  soundName: string[] = ['CityStreet','CoffeeShop','Criket','Fire','Fireworks','Forest','Rain','Rain on window','River','Sea','Thunder','Train','Underwater','Wind'];

  constructor() { }

  emitSounds() {
    this.soundsSubject.next(this.sounds);
  }

  createSound(){
    for(let i=0; i<this.soundPath.length; i++){
      let audio = new Audio();
      audio.src = "../../assets/Sound/" + this.soundPath[i];
      let sound = new Sound(this.soundName[i],this.soundLogo[i],0.5,this.soundPath[i],audio, false)
      this.sounds.push(sound)
    }
    this.emitSounds()
  }

  getSound(){
    return this.sounds
  }

  
}
