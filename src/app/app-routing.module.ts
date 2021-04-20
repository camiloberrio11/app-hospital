import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphic1', component: GraphicsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'register', component: RegisterComponent }, 
  { path: 'login', component: LoginComponent },

  { path: '**', component: NotfoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], // Rutas padres forRoot
  exports: [RouterModule],
})
export class AppRoutingModule {}

// exports = Cualquier otro modulo lo pueda utilizar
