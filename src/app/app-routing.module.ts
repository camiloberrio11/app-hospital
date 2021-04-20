import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { NotfoundComponent } from './notfound/notfound.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  { path: '', redirectTo: '/pages/dashboard', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ], // Rutas padres forRoot
  exports: [RouterModule],
})
export class AppRoutingModule {}

// exports = Cualquier otro modulo lo pueda utilizar
// CommonModule = Modulo para utilizar ngif ngfor , etc
