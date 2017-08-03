import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from'@angular/router';
import{CarouselModule,TabsModule}from'ng2-bootstrap';

import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';
import { FootComponent } from './foot/foot.component';
import { MainSecondComponent } from './main-second/main-second.component';
import { MainFirstComponent } from './main-first/main-first.component';
import {SlidDataService} from './main-first/slid-data.service';
import {CustomRequestOptions} from './customrequest.options';

import { HttpModule ,Http,RequestOptions} from '@angular/http';
import { TabsComponent } from './main-first/tabs/tabs.component';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
// import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    MainSecondComponent,
    MainFirstComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    HttpModule,
    // Router
  ],
  providers: [SlidDataService,
    { provide: RequestOptions, useClass: CustomRequestOptions },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
