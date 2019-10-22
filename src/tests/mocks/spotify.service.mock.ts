import { SpyObject } from '../test.helpers'
import { SpotifyApiService } from '../../app/services/spotify.api.service'
import { BehaviorSubject } from 'rxjs'

export class MockSpotifyService extends SpyObject {
  getAlbumSpy
  searchTrackSpy
  fakeResponse
  public searchAction$: BehaviorSubject<string> = new BehaviorSubject<string>(
    null
  )

  public retrieveAlbumAction$: BehaviorSubject<string> = new BehaviorSubject<
    string
  >(null)

  constructor() {
    super(SpotifyApiService)
    this.fakeResponse = null
    this.getAlbumSpy = this.spy('getAlbum').and.returnValue(this)
    this.searchTrackSpy = this.spy('search').and.returnValue(this)
  }

  subscribe(callback) {
    callback(this.fakeResponse)
  }

  setResponse(json: any): void {
    this.fakeResponse = json
  }

  getProviders(): Array<any> {
    return [{ provide: SpotifyApiService, useValue: this }]
  }
}
