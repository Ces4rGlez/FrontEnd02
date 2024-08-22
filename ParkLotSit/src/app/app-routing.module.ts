import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoadminComponent } from './components/contactoadmin/contactoadmin.component';
import { MisvehiculosComponent } from './components/misvehiculos/misvehiculos.component';
import { MiperfilComponent } from './components/miperfil/miperfil.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ControladComponent } from './components/controlad/controlad.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'perfil', redirectTo: 'perfil', pathMatch: 'full'},
   { path: 'perfil/perfil' ,component: MiperfilComponent },
  { path: 'contact', component: ContactoadminComponent },
  { path: 'sitio', component: MisvehiculosComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'pagad', component: ControladComponent},
  { path: 'solic', component: SolicitudComponent },
  { path: 'notif', component: NotificacionesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
