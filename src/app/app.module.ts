import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wine/wine-item/wineitem.component';
import { WinelistComponent } from './wine/wine-list/winelist.component';
import { WineNewReactiveComponent } from './wine/wine-new/wine-new-reactive.component';
import { WineService } from './services/wine.service';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login/login.component';
import { RegisterComponent } from './user/register/register/register.component';

import { WineDetailComponent } from './wine/wine-detail/wine-detail.component';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { AuthService } from './services/auth.service';

import { WineAppInterceptor } from './services/wine-app.interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';
import { CreateStockDeactivateGuard } from './guards/wine-new-deactivate-guard.guard';
import { WineLoadResolverService } from './guards/wine-load-resolver.service';
import { UserModule } from './user/user.module';
import { WineModule } from './wine/wine.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    /*WineitemComponent,
    WinelistComponent,
    WineNewReactiveComponent,
    LoginComponent,
    RegisterComponent,
    WineDetailComponent*/
  ],
  imports: [

    BrowserModule,
    /*RouterModule,*/
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutesModule
    /*UserModule,*/
    /*WineModule*/
  ],

  providers: [WineService, UserService, UserStoreService, AuthService, AuthGuard, CreateStockDeactivateGuard, WineLoadResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
