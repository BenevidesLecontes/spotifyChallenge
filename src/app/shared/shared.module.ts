import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentsModule } from './components/components.module'
import { PipesModule } from './pipes/pipes.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, PipesModule],
  exports: [ComponentsModule, PipesModule],
})
export class SharedModule {}
