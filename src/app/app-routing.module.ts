import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoggedInGuard } from './shared/guards/logged-in.guard'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then(m => m.SearchModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'albums/:id',
    loadChildren: () =>
      import('./pages/album/album.module').then(m => m.AlbumModule),
    canActivate: [LoggedInGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
