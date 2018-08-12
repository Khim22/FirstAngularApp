import { Component, OnInit, ViewChild, NgModule, Output,EventEmitter  } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import{ AddressBookInfo } from '../model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('addForm') addform: NgForm;
  @Output() addToBook = new EventEmitter<AddressBookInfo>();
  constructor() { }


  ngOnInit() {
  }
  
  processForm(){
    console.log('form values:',this.addform.value);
    this.addToBook.emit(this.addform.value);
  }
}
