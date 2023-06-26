import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './Flight/flight.component';
import { AppComponent } from './app.component';
import { HotelsComponent } from './Hotels/hotels.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', component: HotelsComponent},
      {path: 'flight', component: FlightComponent},
      {path: 'hotels', component: HotelsComponent},
      
    ]
  },
  {
    path: 'flight',
    component: FlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
