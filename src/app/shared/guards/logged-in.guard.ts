import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router'
import { Observable, of } from 'rxjs'
import { SpotifyApiService } from '../../services/spotify.api.service'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private spotifyApiService: SpotifyApiService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.spotifyApiService.isLoggedIn) {
      return of(true)
    } else {
      return this.spotifyApiService
        .requestAccessToken()
        .pipe(map(() => this.spotifyApiService.isLoggedIn))
    }
  }
}
