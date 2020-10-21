import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RetkikunnatComponent } from './retkikunnat/retkikunnat/retkikunnat.component';
import { FooterComponent } from './footer/footer.component';

//FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//Material module
import { MaterialModule } from './material/material.module';
import { CreateRetkikuntaComponent } from './retkikunnat/create-retkikunta/create-retkikunta.component';
import { ViewRetkikuntaComponent } from './retkikunnat/view-retkikunta/view-retkikunta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RetkikunnatComponent,
    FooterComponent,
    CreateRetkikuntaComponent,
    ViewRetkikuntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
