import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field"
import { trigger,transition,style,animate } from "@angular/animations";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

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
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get aliases() {
    return this.createExpeditionForm.get('aliases') as FormArray;
  }

  isAnimate: true;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }
  
  close(){
    document.getElementsByClassName("animate__animated")[0].classList.remove("animate__slideInLeft")
    document.getElementsByClassName("animate__animated")[0].classList.add("animate__slideOutRight");
    setTimeout(()=>{this.dialog.closeAll();}, 1000);
  }

  addAdventurer(){
    console.log("Todo add advent")
    this.aliases.push(this.formBuilder.control(''));

  }
  onSubmit(){
    console.log(this.createExpeditionForm.value);
  }
}
