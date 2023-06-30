import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './Flight/flight.component';
import { HomeBusComponent } from './Home_Bus/homeBus.component';
import { BookingComponent } from './Booking/booking.component';
import { AddBusComponent } from './Add_Bus/add.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { DetailsComponent } from './Details/details.component';
import { PathService } from './Services/path.service';
import { CategoryCarService } from './Services/categoryCarService';
import { CarService } from './Services/carService';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './Cart/cart.component';
import { ReceivedComponent } from './Booking/paymentReceived.component';
import { CompletedComponent } from './Booking/paymentCompleted.component';
import { ProfileComponent } from './Profile/profile.component';
import { ContactComponent } from './Contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    HomeBusComponent,
    BookingComponent,
    AddBusComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    CartComponent,
    ReceivedComponent,
    CompletedComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    PathService,
    CategoryCarService,
    CarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
