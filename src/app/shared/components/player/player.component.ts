import { Component, OnInit } from '@angular/core'
import { AudioService } from '../../../services/audio.service'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(public audioService: AudioService) {}

  ngOnInit() {}
}
