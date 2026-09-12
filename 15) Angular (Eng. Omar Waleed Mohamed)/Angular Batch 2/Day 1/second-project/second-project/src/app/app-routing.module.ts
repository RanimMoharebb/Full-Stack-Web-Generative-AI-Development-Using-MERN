import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LocationComponent } from './components/location/location.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [

    {path:"main",component:MainComponent},
    {path:"location",component:LocationComponent},
    {path:"about",component:AboutComponent},








    {path:"**",component:NotfoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
