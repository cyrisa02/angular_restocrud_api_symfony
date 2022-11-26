import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resto } from '../model/resto';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  restaurantRecords: Resto = {
    id: 0,
    name: '',
    owner: '',
    mobile: '',
    email: '',
    location: ''
  }

  constructor(private restoService: RestoService, private router: Router) { }

  ngOnInit(): void {
  }

  addRecords() {
    this.restoService.create(this.restaurantRecords).subscribe(() => {
      this.router.navigate(["/"]);
    })
  }





}
