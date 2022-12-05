import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteRestoComponent } from '../delete-resto/delete-resto.component';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-restoitem',
  templateUrl: './restoitem.component.html',
  styleUrls: ['./restoitem.component.css']
})
export class RestoitemComponent implements OnInit {

  constructor(public serviceApi: RestoService, private router: Router, public dialog: MatDialog) { }

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

  openDeleteModel(id: number) {
    this.dialog.open(DeleteRestoComponent, {
      width: '250px',
      data: { id }
    })
  }

}
