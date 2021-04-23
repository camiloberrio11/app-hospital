import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' },
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'Progreso' },
      },
      {
        path: 'graphics',
        component: GraphicsComponent,
        data: { title: 'Graficas' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { title: 'Ajustes' },
      },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
