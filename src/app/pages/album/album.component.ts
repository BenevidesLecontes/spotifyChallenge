import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { AudioService } from '../../services/audio.service'
import { SpotifyApiService } from '../../services/spotify.api.service'
import { Observable } from 'rxjs'
import { AlbumItem, TrackItem } from '../../models/searchResponse'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  album$: Observable<AlbumItem> = this.spotifyApiService.album$

  constructor(
    private route: ActivatedRoute,
    private audioService: AudioService,
    private spotifyApiService: SpotifyApiService,
    private location: Location
  ) {}

  ngOnInit() {
    this.spotifyApiService.retrieveAlbumAction$.next(
      this.route.snapshot.params.id
    )
  }

  back() {
    this.location.back()
  }

  play(track: TrackItem, album: AlbumItem) {
    track.album = {
      images: album.images,
    } as AlbumItem
    this.audioService.playOrPauseTrack(track.preview_url, track)
  }
}
