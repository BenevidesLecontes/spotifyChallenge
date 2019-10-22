import { Component, OnInit } from '@angular/core'
import { AudioService } from './services/audio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public audioService: AudioService) {}

  ngOnInit(): void {}
}
