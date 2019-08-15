import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm = new FormGroup({
    firstName: new FormControl('', [Validators.pattern(/^[A-z]{1,20}$/)]),
    lastName: new FormControl('', [Validators.min(1), Validators.maxLength(20)]),
    homePhone: new FormControl(),
    workPhone: new FormControl(),
    officePhone: new FormControl(),
    work: new FormControl(),
    town: new FormControl(),
    positions: new FormControl(),
    email: new FormControl(),
  });

  id=this.route.snapshot.queryParams['id'];;
  contacts$ = {}

  constructor
    (
      private fb: FormBuilder,
      private contactService: ContactService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  getId(input){
    console.log(input)
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    
    this.contactService.getC(this.id).subscribe(data => {
      this.contacts$ = data;
      
      this.editForm.setValue({
        firstName: this.contacts$["firstName"],
        lastName: this.contacts$["lastName"],
        homePhone: this.contacts$["homePhone"],
        workPhone: this.contacts$["workPhone"],
        officePhone: this.contacts$["officePhone"],
        email: this.contacts$["email"],
        town: this.contacts$["town"],
        work: this.contacts$["work"],
        positions: this.contacts$["positions"],
      })
    })
  }

  editContact() {
    this.contactService.editC(this.editForm.value, this.id).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }

  get f() {
    return this.editForm.controls
  }

}
