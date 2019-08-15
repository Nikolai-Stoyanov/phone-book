import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contacts$=[];

  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

  
}
