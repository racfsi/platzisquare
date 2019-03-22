import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadosService } from './services/empleados.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CrearComponent } from './crear/crear.component';

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear', component: CrearComponent }
];

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDJchijwwp9M2WsPl6-VflHlwjM1BEubYA",
    authDomain: "pruebaangular-a1ad7.firebaseapp.com",
    databaseURL: "https://pruebaangular-a1ad7.firebaseio.com",
    storageBucket: "pruebaangular-a1ad7.appspot.com",
    messagingSenderId: "767833536962"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL38SPiX3ET5uymp-IWbCS2eDio-O_a8A'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
