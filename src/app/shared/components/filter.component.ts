import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { debounceTime, takeUntil } from 'rxjs/operators'
import { ReplaySubject } from 'rxjs'

@Component({
  selector: 'app-filter',
  template: `
    <form>
      <div class="group">
        <label for="search">Busque por artistas, álbuns ou músicas</label>
        <input
          type="search"
          autocomplete="off"
          id="search"
          class="search-input"
          [formControl]="searchField"
          placeholder="Comece a escrever..."
        />
        <span class="highlight"></span>
        <span class="input-bar"></span>
      </div>
    </form>
  `,
  styles: [
    `
      .search-input {
        font-size: 48px;
        font-weight: bold;
        font-family: Roboto, sans-serif;
        color: white;
      }
    `,
  ],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() initialQuery: string

  searchField: FormControl

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)

  constructor(private router: Router) {}

  ngOnInit() {
    this.searchField = new FormControl(this.initialQuery)

    this.searchField.valueChanges
      .pipe(
        debounceTime(300),
        takeUntil(this.destroyed$)
      )
      .subscribe(query => {
        if (query) {
          this.router.navigate(['/search', query])
        } else {
          this.router.navigate(['/search'])
        }
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }
}
