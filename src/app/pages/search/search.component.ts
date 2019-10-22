import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, takeUntil } from 'rxjs/operators'
import { BehaviorSubject, ReplaySubject } from 'rxjs'
import { AlbumItem, TrackItem } from '../../models/searchResponse'
import { SpotifyApiService } from '../../services/spotify.api.service'

@Component({
  selector: 'app-search',
  template: `
    <app-filter [initialQuery]="query"></app-filter>
    <ng-container *ngIf="!query">
      <ng-container
        *ngIf="
          recentSearch$?.value?.albums?.length ||
            recentSearch$?.value?.tracks?.length;
          else elseTmpl
        "
      >
        <h3 class="search-info">Buscas recentes</h3>
        <app-items
          [items]="{
            albums: recentSearch$?.value?.albums,
            tracks: recentSearch$?.value.tracks
          }"
        ></app-items>
      </ng-container>
    </ng-container>
    <router-outlet></router-outlet>

    <ng-template #elseTmpl>
      <h3 class="search-info">Encontre suas músicas e álbuns favoritos.</h3>
    </ng-template>
  `,
  styles: [],
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string = this.route.snapshot.firstChild
    ? this.route.snapshot.firstChild.params.query
    : ''

  recentSearch$: BehaviorSubject<{
    tracks?: TrackItem[]
    albums?: AlbumItem[]
  }> = this.spotifyApiService.recentSearch$

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spotifyApiService: SpotifyApiService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.query = this.route.snapshot.firstChild
          ? this.route.snapshot.firstChild.params.query
          : ''
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }
}
