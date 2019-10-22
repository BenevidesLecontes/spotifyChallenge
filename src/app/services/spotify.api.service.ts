import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { filter, share, shareReplay, switchMap, tap } from 'rxjs/operators'
import { Token } from '../models/token'
import { BehaviorSubject, Observable, pipe } from 'rxjs'
import dayJs, { Dayjs } from 'dayjs'
import { AlbumItem, SearchResponse, TrackItem } from '../models/searchResponse'

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  private static tokenKey = 'spotifyAccessToken'

  public searchAction$: BehaviorSubject<string> = new BehaviorSubject<string>(
    null
  )

  public retrieveAlbumAction$: BehaviorSubject<string> = new BehaviorSubject<
    string
  >(null)

  searchResult$: BehaviorSubject<
    SearchResponse
  > = this.convertObservableToBehaviorSubject(
    this.searchAction$.pipe(
      pipe(
        filter(query => !!query),
        switchMap(query => {
          return this.search(query)
        }),
        shareReplay()
      )
    )
  )
  recentSearch$: BehaviorSubject<{
    tracks?: TrackItem[]
    albums?: AlbumItem[]
  }> = new BehaviorSubject<{ tracks: TrackItem[]; albums?: AlbumItem[] }>({
    tracks: [],
    albums: [],
  })
  album$: Observable<AlbumItem> = this.retrieveAlbumAction$.pipe(
    filter(id => !!id),
    switchMap(id => {
      return this.getAlbum(id)
    }),
    shareReplay()
  )

  constructor(private http: HttpClient) {}

  get token(): Token {
    const token = localStorage.getItem(SpotifyApiService.tokenKey)
    return JSON.parse(token)
  }

  get expiration(): Dayjs {
    return dayJs(this.token.expires_at)
  }

  get isLoggedIn(): boolean {
    return this.token && dayJs().isBefore(this.expiration)
  }

  static removeToken() {
    localStorage.removeItem(SpotifyApiService.tokenKey)
  }

  private static persistToken(token: Token) {
    token.expires_at = dayJs()
      .add(token.expires_in, 'second')
      .valueOf()
    localStorage.setItem(SpotifyApiService.tokenKey, JSON.stringify(token))
  }

  private static makeAccessTokenHeaders() {
    let headers = new HttpHeaders()

    headers = headers.set(
      'Authorization',
      'Basic  ' + btoa(`${environment.clientId}:${environment.clientSecret}`)
    )
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded;')
    return headers
  }

  requestAccessToken(): Observable<Token> {
    const body = 'grant_type=client_credentials'
    return this.http
      .post<Token>(environment.authorizationTokenUrl, body, {
        headers: SpotifyApiService.makeAccessTokenHeaders(),
      })
      .pipe(
        share(),
        tap(SpotifyApiService.persistToken)
      )
  }

  private search(query) {
    const params: HttpParams = new HttpParams()
      .set('query', `${query}`)
      .set('type', 'album,track')
      .set('include_external', 'audio')
      .set('market', 'br')
    return this.http.get<SearchResponse>(`${environment.apiUrl}/search`, {
      params,
    })
  }

  private getAlbum(id) {
    return this.http.get<AlbumItem>(`${environment.apiUrl}/albums/${id}`, {
      params: new HttpParams().set('market', 'br'),
    })
  }

  private convertObservableToBehaviorSubject(source): BehaviorSubject<any> {
    const behavior = new BehaviorSubject(null)
    source.subscribe(value => behavior.next(value))
    return behavior
  }
}
