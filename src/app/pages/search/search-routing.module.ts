import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SearchComponent } from './search.component'
import { ResultsComponent } from '../../shared/components/results.component'

export const searchRoutes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: ':query',
        component: ResultsComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(searchRoutes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
