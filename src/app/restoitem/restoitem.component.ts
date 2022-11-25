import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-restoitem',
  templateUrl: './restoitem.component.html',
  styleUrls: ['./restoitem.component.css']
})
export class RestoitemComponent implements OnInit {

  constructor(public serviceApi: RestoService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {

    this.serviceApi.getAll().subscribe(
      response => {
        this.serviceApi.list = response["hydra:member"];
      }
    );

  }
}
