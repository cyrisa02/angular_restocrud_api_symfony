import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-delete-resto',
  templateUrl: './delete-resto.component.html',
  styleUrls: ['./delete-resto.component.css']
})
export class DeleteRestoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteRestoComponent>, private reataurantService: RestoService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  confirmDelete() {
    this.reataurantService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id)
    })
  }

}

