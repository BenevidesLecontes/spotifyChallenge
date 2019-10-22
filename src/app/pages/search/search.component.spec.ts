import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchComponent } from './search.component'
import { ActivatedRoute, Router } from '@angular/router'
import { MockSpotifyService } from '../../../tests/mocks/spotify.service.mock'
import { AlbumItem, TrackItem } from '../../models/searchResponse'
import { BehaviorSubject } from 'rxjs'
import { RouterTestingModule } from '@angular/router/testing'
import { Location } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { searchRoutes } from './search-routing.module'

describe('SearchComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>
  let router: Router
  let location: Location
  beforeEach(async(() => {
    const mockSpotifyService: MockSpotifyService = new MockSpotifyService()
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule.withRoutes(searchRoutes), SharedModule],
      providers: [
        mockSpotifyService.getProviders(),
        {
          provide: ActivatedRoute,
          useFactory: (r: Router) => r.routerState.root,
          deps: [Router],
        },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    router = TestBed.get(Router)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(SearchComponent)
    router.initialNavigation()
    component = fixture.componentInstance
    component.recentSearch$ = new BehaviorSubject<{
      tracks?: TrackItem[]
      albums?: AlbumItem[]
    }>({
      tracks: [],
      albums: [],
    })
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  // it('should call OnInit', fakeAsync(() => {
  //   router.navigate(['search', 'anitta']).then(() => {
  //     expect(location.path()).toBe('/search/anitta')
  //   })
  // }))
})
