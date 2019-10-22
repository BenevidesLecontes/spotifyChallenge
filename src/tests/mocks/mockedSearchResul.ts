import { SearchResponse } from '../../app/models/searchResponse'
import { MockedTracks } from './mockedTracks'
import { MockedAlbums } from './mockedAlbums'

export const MockedSearchResult: SearchResponse = {
  albums: {
    href:
      'https://api.spotify.com/v1/search?query=anitta&type=album&include_external=audio&market=BR&offset=0&limit=20',
    items: MockedAlbums,
    limit: 20,
    next:
      'https://api.spotify.com/v1/search?query=anitta&type=album&include_external=audio&market=BR&offset=20&limit=20',
    offset: 0,
    previous: null,
    total: 90,
  },
  tracks: {
    href:
      'https://api.spotify.com/v1/search?query=anitta&type=track&include_external=audio&market=BR&offset=0&limit=20',
    items: MockedTracks,
    limit: 20,
    next:
      'https://api.spotify.com/v1/search?query=anitta&type=track&include_external=audio&market=BR&offset=20&limit=20',
    offset: 0,
    previous: null,
    total: 548,
  },
}
