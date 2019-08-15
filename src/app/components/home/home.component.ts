import { Component, OnInit, Input } from '@angular/core';

import { ContactService } from '../../services/contact.services';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  contacts$=[]
  
  searchForm = new FormGroup({
    search: new FormControl()
  });

  constructor(public contactService: ContactService, private router:Router) { }

  ngOnInit() {
    this.getAllContacts()
  }

  deleteContact(id){
    this.contactService.deleteC(id).subscribe(() => {
      this.getAllContacts()
    })
  }

  inputSearch(input):void{
    this.contactService.getAllCcc(input).subscribe(data=>{
          this.contacts$= data;
        });
  }

  clearSearch(){
    this.searchForm.get('search').reset();
    this.getAllContacts()
  }

  getAllContacts(){
    this.contactService.getAllC().subscribe(data=>{
      this.contacts$= data;
    });
  }
}
