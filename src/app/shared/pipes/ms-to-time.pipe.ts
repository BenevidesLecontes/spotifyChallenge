import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'msToTime',
})
export class MsToTimePipe implements PipeTransform {
  transform(value: number, isMilliseconds: boolean = false): string {
    const d = isMilliseconds ? Number(value) / 1000 : Number(value)

    const h = Math.floor(d / 3600)
    const m = Math.floor((d % 3600) / 60)
    const s = Math.floor((d % 3600) % 60)

    return `${h > 0 ? `${h}:${m < 10 ? '0' : ''}` : ''}${m}:${
      s < 10 ? '0' : ''
    }${s}`
  }
}
