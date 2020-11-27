import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateRetkikuntaComponent } from '../create-retkikunta/create-retkikunta.component';
import { trigger,transition,style,animate } from "@angular/animations";


class Retkikunta {
  name: string;
  destination: string;
  startDate: Date;
  constructor(name: string, destination: string) {
    this.name = name;
    this.destination = destination;
  }
  //startdate: Date;
}

@Component({
  selector: 'app-retkikunnat',
  templateUrl: './retkikunnat.component.html',
  styleUrls: ['./retkikunnat.component.css']
})

export class RetkikunnatComponent implements OnInit {
  displayedColumns: string[] = ['name', 'destination', 'startDate', 'endDate', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private firebaseService: FirebaseService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.firebaseService.getRetkikunnat()
      .then(result => {
        this.dataSource = new MatTableDataSource(result);
      }
    )
  }

  getTravellersForRetkikunta(){
    this.firebaseService.test2("sad");
  }

  openDialogCreateRetkikunta(){
    const dialogRef = this.dialog.open(CreateRetkikuntaComponent,{panelClass: ['animate__animated','animate__slideInLeft'], height:'75%',width:'40%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("ja result:", result);
    })
  }

  deleteRetkikunta(retkikuntaId) {
    this.firebaseService.deleteRetkikunta(retkikuntaId);
  }

}
