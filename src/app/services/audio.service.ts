import { Injectable } from '@angular/core'
import { BehaviorSubject, timer } from 'rxjs'
import { TrackItem } from '../models/searchResponse'
import { takeWhile } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audio: HTMLAudioElement
  track: TrackItem

  playing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)
  elapsedTime: BehaviorSubject<number> = new BehaviorSubject<number>(null)

  playOrPauseTrack(nextTrackUrl, track: TrackItem) {
    // Do nothing, if next and current track are the same
    this.pauseTrack()
    if (this.track && this.track.preview_url === nextTrackUrl) {
      // Stop current track
      return
    }

    // Play track
    if (this.audio) {
      this.audio.pause()
    }
    this.track = track
    this.audio = new Audio(nextTrackUrl)
    this.audio.play().then(() => {
      this.audio.addEventListener('ended', () => {
        this.elapsedTime.next(0)
        this.audio = null
        this.track = null
        this.playing$.next(false)
      })
      timer(0, 1000)
        .pipe(takeWhile(() => this.playing$.value))
        .subscribe(() => {
          if (this.audio.duration) {
            this.elapsedTime.next(this.audio.currentTime / this.audio.duration)
          }
        })
      this.playing$.next(true)
    })
  }

  pauseTrack() {
    if (this.audio) {
      if (!this.audio.paused) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
    }
  }
}
