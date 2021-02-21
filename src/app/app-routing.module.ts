import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scripts',
    pathMatch: 'full'
  },
  {
    path: "scripts",
    loadChildren: () => import("./routes/scripts/modules/scripts.module")
      .then(x => x.ScriptsModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    DetailRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
