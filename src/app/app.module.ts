import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, IoaDataService } from './shared';
import { HttpModule } from '@angular/http';


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  /* for development
  return new TranslateHttpLoader(
      http,
      '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
      '.json'
  ); */
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    IoaDataService,
    { provide:LocationStrategy,useClass:HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
