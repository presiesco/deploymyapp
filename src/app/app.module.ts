import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';

import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FOFComponent } from './fof/fof.component';
import { AppareilService } from './appareil/service/appareil.service';
import { AuthService } from './appareil/service/auth.service';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'not-found', component: FOFComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: '', component: AppareilViewComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FOFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
