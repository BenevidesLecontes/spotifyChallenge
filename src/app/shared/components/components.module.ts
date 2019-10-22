import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerComponent } from './player/player.component'
import { PipesModule } from '../pipes/pipes.module'
import { ResultsComponent } from './results.component'
import { FilterComponent } from './filter.component'
import { ItemsComponent } from './items.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    PlayerComponent,
    ResultsComponent,
    FilterComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    PlayerComponent,
    ResultsComponent,
    FilterComponent,
    ItemsComponent,
    RouterModule,
  ],
})
export class ComponentsModule {}
