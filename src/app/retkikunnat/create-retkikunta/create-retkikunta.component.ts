import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
//import { MatFormField, MatLabel } from "@angular/material/form-field"
//import { trigger,transition,style,animate } from "@angular/animations";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-create-retkikunta',
  templateUrl: './create-retkikunta.component.html',
  styleUrls: ['./create-retkikunta.component.css']
})
export class CreateRetkikuntaComponent {
  createExpeditionForm = this.formBuilder.group({
    name: ['', Validators.required],
    destination: ['', Validators.required],
    startDate: [''],
    endDate: [''],
    adventurers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get adventurers() {
    return this.createExpeditionForm.get('adventurers') as FormArray;
  }

  isAnimate: true;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private firebaseService: FirebaseService
  ) { }
  
  addAdventurer(){
    this.adventurers.push(this.formBuilder.control(''));
  }

  close(){
    document.getElementsByClassName("animate__animated")[0].classList.remove("animate__slideInLeft")
    document.getElementsByClassName("animate__animated")[0].classList.add("animate__slideOutRight");
    setTimeout(()=>{this.dialog.closeAll();}, 1000);
  }

  //TODO tarvihtaan retkikunnan luova dto json objekti
  onSubmit(){
    console.log("Todo dto object!!");
    this.firebaseService.addNewRetkikunta(this.createExpeditionForm.value);
  }
}
