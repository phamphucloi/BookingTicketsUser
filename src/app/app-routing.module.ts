import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './Flight/flight.component';
import { HomeBusComponent } from './Home_Bus/homeBus.component';
import { CartComponent } from './Cart/cart.component';
import { AddBusComponent } from './Add_Bus/add.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { DetailsComponent } from './Details/details.component';

const routes: Routes = [
  {path: '', component: HeaderComponent,children: [
    {path: '', component: FlightComponent},
    {path: 'homeBus', component: HomeBusComponent},
    {path: 'addBus', component: AddBusComponent},
    {path: 'cart', component: CartComponent},
    {path: 'details', component: DetailsComponent},
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
