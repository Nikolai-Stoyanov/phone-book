import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from '../../services/contact.services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  addForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    homePhone: new FormControl(),
    workPhone: new FormControl(),
    officePhone: new FormControl(),
    work: new FormControl(),
    town: new FormControl(),
    positions: new FormControl(),
    email: new FormControl(),


  });

  
  constructor(private fb: FormBuilder, private contactService:ContactService, private router:Router){ }

  createContact(){
    this.contactService.createC(this.addForm.value).subscribe((data)=>{
      this.router.navigate(['/'])
    })
  }

  get f(){
    return this.addForm.controls
  }

}
