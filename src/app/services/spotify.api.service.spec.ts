import { TestBed } from '@angular/core/testing'

import { SpotifyApiService } from './spotify.api.service'

describe('Spotify.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: SpotifyApiService = TestBed.get(SpotifyApiService)
    expect(service).toBeTruthy()
  })
})
