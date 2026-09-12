import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from './components/location/location.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
     NavComponent,
     LocationComponent,
     NotfoundComponent,
     AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
