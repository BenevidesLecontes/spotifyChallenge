import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlbumComponent } from './album.component'

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
