import { Component, OnInit } from "@angular/core";
import { CarService } from "../Services/carService";
import { Car } from "../Models/car.model";

@Component({
    templateUrl: './flight.component.html'
})

export class FlightComponent implements OnInit {

    constructor(private _carService:CarService){}

    cars: Car[];

    ngOnInit(): void {
        this._carService.getAllCar().then(res=>{
            this.cars = res as Car[];
        },er=>console.log(er));
    }

    chooseOption(a: any){
        console.log(a.target.value);
        
    }
    
}