import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MiperfilComponent } from './components/miperfil/miperfil.component';

import { MisvehiculosComponent } from './components/misvehiculos/misvehiculos.component';
import { ContactoadminComponent } from './components/contactoadmin/contactoadmin.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ControladComponent } from './components/controlad/controlad.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
   
    MiperfilComponent,
         MisvehiculosComponent,
         ContactoadminComponent,
         MenuComponent,
         LoginComponent,
         ControladComponent,
         SolicitudComponent,
         NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
