import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule, MdSidenavModule} from '@angular/material';
import 'hammerjs';
import { MainPageComponent } from './main-page/main-page.component';
import { SideNavComponent } from './main-page/side-nav/side-nav.component';
import { ImageLoaderComponent } from './main-page/image-loader/image-loader.component';
import {RouterLink, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SideNavComponent,
    ImageLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule,
    RouterModule.forRoot([
      {
        path: 'index',
        component: MainPageComponent,
      },
      {
        path: 'sidenav',
        component: SideNavComponent,
      }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
