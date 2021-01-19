import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-view-retkikunta',
  templateUrl: './view-retkikunta.component.html',
  styleUrls: ['./view-retkikunta.component.css']
})
export class ViewRetkikuntaComponent implements OnInit {

  retkikuntaId: string;
  retkikunta: any;

  constructor(
    private router: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.retkikuntaId = params['retkikuntaId'];
      this.getRetkikunta(this.retkikuntaId);
    })
  }

  getRetkikunta(retkikuntaId){
    this.firebaseService.getRetkikunta(retkikuntaId)
    .then(result => {
      console.log(result);
      this.retkikunta = result;
    });
  }
  
/*
    this.firebaseService.getRetkikunnat()
      .then(result => {
        this.dataSource = new MatTableDataSource(result);
      }
    )
*/

}
