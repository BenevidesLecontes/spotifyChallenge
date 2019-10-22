import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { SpotifyApiService } from '../services/spotify.api.service'
import { switchMap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private static refreshingToken: boolean

  private previousRequest: HttpRequest<any>

  constructor(private spotifyApiService: SpotifyApiService) {}

  private get requestHeaders() {
    return new HttpHeaders().append(
      'Authorization',
      `${this.spotifyApiService.token.token_type} ${this.spotifyApiService.token.access_token}`
    )
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.spotifyApiService.isLoggedIn) {
      return this.cloneRequest(req, next)
    } else if (
      !this.spotifyApiService.isLoggedIn &&
      this.spotifyApiService.token &&
      !req.url.includes('token')
    ) {
      this.previousRequest = req.clone()
      return this.spotifyApiService
        .requestAccessToken()
        .pipe(switchMap(() => this.cloneRequest(this.previousRequest, next)))
    }
    return next.handle(req)
  }

  private cloneRequest(req: HttpRequest<any>, next: HttpHandler) {
    const cloned = req.clone({
      headers: this.requestHeaders,
    })
    return next.handle(cloned)
  }
}
