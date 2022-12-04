import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resto } from '../model/resto';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-edit-resto',
  templateUrl: './edit-resto.component.html',
  styleUrls: ['./edit-resto.component.css']
})
export class EditRestoComponent implements OnInit {
  restaurantRecords: Resto = {

    name: '',
    owner: '',
    mobile: '',
    email: '',
    location: ''
  }


  constructor(private restoService: RestoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'))
      this.getById(id)
    })

  }

  getById(id: number) {
    this.restoService.getbyId(id).subscribe((data) => {
      this.restaurantRecords = data;
    })
  }

  updateRecords() {
    this.restoService.update(this.restaurantRecords).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
