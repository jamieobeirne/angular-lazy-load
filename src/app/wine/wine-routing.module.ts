import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinelistComponent } from '../wine/wine-list/winelist.component';
import { AuthGuard } from '../guards/auth.guard';
import { WineNewReactiveComponent } from '../wine/wine-new/wine-new-reactive.component';
import { CreateStockDeactivateGuard } from '../guards/wine-new-deactivate-guard.guard';
import { WineDetailComponent } from '../wine/wine-detail/wine-detail.component';
import { StockLoadResolverService } from '../guards/wine-load-resolver.service';


const routes: Routes = [
  {
    path: 'list', component: WinelistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create', component: WineNewReactiveComponent,
    canActivate: [AuthGuard], canDeactivate: [CreateStockDeactivateGuard]
  },
  {
    path: ':id', component: WineDetailComponent,
    canActivate: [AuthGuard], resolve: { wine: StockLoadResolverService }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }
