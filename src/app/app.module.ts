import { BrowserModule } from '@angular/platform-browser'
import { LOCALE_ID, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthInterceptor } from './interceptors/authInterceptor.interceptor'
import { SpotifyApiService } from './services/spotify.api.service'
import { registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt'
import { SharedModule } from './shared/shared.module'

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [SpotifyApiService],
    },
    { provide: LOCALE_ID, useValue: 'pt-Br' },
  ],
  bootstrap: [AppComponent],
  exports: [SharedModule],
})
export class AppModule {}
