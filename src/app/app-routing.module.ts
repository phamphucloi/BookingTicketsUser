import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './Flight/flight.component';
import { HomeBusComponent } from './Home_Bus/homeBus.component';
import { AddBusComponent } from './Add_Bus/add.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { DetailsComponent } from './Details/details.component';
import { CartComponent } from './Cart/cart.component';
import { BookingComponent } from './Booking/booking.component';
import { ReceivedComponent } from './Booking/paymentReceived.component';
import { CompletedComponent } from './Booking/paymentCompleted.component';
import { ProfileComponent } from './Profile/profile.component';
import { ContactComponent } from './Contact/contact.component';

const routes: Routes = [
  {path: '', component: HeaderComponent,children: [
    {path: 'flight', component: FlightComponent},
    {path: 'homeBus', component: HomeBusComponent},
    {path: 'addBus', component: AddBusComponent},
    {path: 'booking', component: BookingComponent},
    {path: 'details', component: DetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'received', component: ReceivedComponent},
    {path: 'completed', component: CompletedComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'contact', component: ContactComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
