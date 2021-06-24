import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineNewReactiveComponent }
    from './wine/wine-new/wine-new-reactive.component';
import { WinelistComponent } from './wine/wine-list/winelist.component';
import { LoginComponent } from './user/login/login/login.component';
import { RegisterComponent } from './user/register/register/register.component';
import { WineDetailComponent } from './wine/wine-detail/wine-detail.component';

import { AuthGuard } from './guards/auth.guard';
import { CreateStockDeactivateGuard } from './guards/wine-new-deactivate-guard.guard';
import { StockLoadResolverService } from './guards/wine-load-resolver.service';


const appRoutes: Routes = [
    { path: '', redirectTo: 'user/login', pathMatch: 'full' },
    /*{ path: 'wine', loadChildren: 'app/wine/wine.module#WineModule' },*/
    /*{ path: 'user', loadChildren: 'app/user/user.module#UserModule' },*/
    { path: 'wine', loadChildren: () => import('../app/wine/wine.module').then(m => m.WineModule) },
    { path: 'user', loadChildren: () => import('../app/user/user.module').then(m => m.UserModule) },

    { path: '**', redirectTo: 'user/register' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutesModule { }