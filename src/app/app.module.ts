import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HttpClientModule} from '@angular/common/http'
import { appReducers } from './store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import {StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray) ,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
