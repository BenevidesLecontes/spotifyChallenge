import { Component, Input, OnInit } from '@angular/core'
import { AlbumItem, TrackItem } from '../../models/searchResponse'
import { AudioService } from '../../services/audio.service'
import { SpotifyApiService } from '../../services/spotify.api.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input() items: {
    tracks: TrackItem[]
    albums: AlbumItem[]
  }

  constructor(
    public audioService: AudioService,
    private spotifyApiService: SpotifyApiService,
    public location: Location
  ) {}

  trackByFn: any = (track: TrackItem) => track.id

  trackAlbumByFn: any = (album: AlbumItem) => album.id

  ngOnInit() {}

  play(url: string, track: TrackItem) {
    this.audioService.playOrPauseTrack(url, track)
    this.spotifyApiService.recentSearch$.next({
      ...this.spotifyApiService.recentSearch$.value,
      tracks: this.uniq<TrackItem>(
        [...this.spotifyApiService.recentSearch$.value.tracks, track],
        'preview_url'
      ),
    })
  }

  updateRecentSearchAlbums(album: AlbumItem) {
    this.spotifyApiService.recentSearch$.next({
      ...this.spotifyApiService.recentSearch$.value,
      albums: this.uniq<AlbumItem>(
        [...this.spotifyApiService.recentSearch$.value.albums, album],
        'preview_url'
      ),
    })
  }

  uniq<T>(arr, param) {
    return Array.from(
      arr.reduce((m, t) => m.set(t[param], t), new Map()).values()
    ) as T[]
  }
}
