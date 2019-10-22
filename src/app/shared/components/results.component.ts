import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { filter, takeUntil } from 'rxjs/operators'
import { SpotifyApiService } from '../../services/spotify.api.service'
import { BehaviorSubject, ReplaySubject } from 'rxjs'
import { SearchResponse } from '../../models/searchResponse'

@Component({
  selector: 'app-results',
  template: `
    <h4 class="search-info">
      Resultados encontrados para
      <q>{{ spotifyApiService.searchAction$ | async }}</q>
    </h4>
    <ng-container *ngIf="results$ | async as results">
      <app-items
        [items]="{
          albums: results?.albums?.items,
          tracks: results?.tracks?.items
        }"
      ></app-items>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit, OnDestroy {
  results$: BehaviorSubject<SearchResponse> = this.spotifyApiService
    .searchResult$
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)

  constructor(
    private route: ActivatedRoute,
    public spotifyApiService: SpotifyApiService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        filter(params => !!params),
        takeUntil(this.destroyed$)
      )
      .subscribe(params => {
        this.spotifyApiService.searchAction$.next(params.query)
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }
}
