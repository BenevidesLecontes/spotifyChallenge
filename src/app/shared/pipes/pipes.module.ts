import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MsToTimePipe } from './ms-to-time.pipe'

@NgModule({
  declarations: [MsToTimePipe],
  imports: [CommonModule],
  exports: [MsToTimePipe],
})
export class PipesModule {}
