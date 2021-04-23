import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    PagesComponent,
    AccountSettingsComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
})
export class PagesModule {}
