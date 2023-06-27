import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CarService } from "../Services/carService";
import { Car } from "../Models/car.model";
import { formatDate } from "@angular/common";

@Component({
    templateUrl: './add.component.html'
})

export class AddBusComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _activated: ActivatedRoute,
        private _CarService: CarService
    ) {}

    addCar: FormGroup;
    cars: Car[]; 

    ngOnInit(): void {
        this.addCar = this._formBuilder.group({
            licensePlates: '',
            registrationDate: '',
            idCategory:'1',
            createAt: '',
            updateAt: '',
        })
    }
    
    save() {
        var car: Car = this.addCar.value as Car;
        console.log(car);
        car.registrationDate = formatDate(car.registrationDate, 'dd/MM/yyyy', 'en-Us');
        car.createAt = formatDate(car.createAt, 'dd/MM/yyyy', 'en-Us');
        car.updateAt = formatDate(car.updateAt, 'dd/MM/yyyy', 'en-Us');
        this._CarService.addCar(car).then(
            res=>{
                console.log(res);
                this._router.navigate(['/homeBus']);
                alert("Success")
            }, 
            er => {
                console.log(er)
            });
    }
}