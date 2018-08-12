import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressBookInfo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  addBook: AddressBookInfo[] = [];

  title = 'Day1AddressBookExercise';

  updateBook(info:AddressBookInfo){
    this.addBook.unshift(info);
    console.log("addBook: ", this.addBook);
  }
}


