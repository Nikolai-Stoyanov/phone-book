import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../components/models/Contact';
import { Observable } from 'rxjs';

const createContact = 'http://localhost:3000/contact';
const getAllContacts = 'http://localhost:3000/contact';
const editContact = 'http://localhost:3000/contact/';
const getAllContact = 'http://localhost:3000/contact/';
const deleteContact= 'http://localhost:3000/contact/';
const getSingleContact = 'http://localhost:3000/contact/';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createC(data) {
    return this.http.post(createContact, data);
  }

  editC(data,id) {
    return this.http.put(editContact + id, data);
  }

  getAllC(): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>(getAllContact)
  }

  getAllCcc(input): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>(getAllContacts+"?q="+input)
  }

  getC(id): Observable<Contact> {
    return this.http.get<Contact>(getSingleContact + id)
  }

  deleteC(id) {
    return this.http.delete(deleteContact + id)
  }
}
