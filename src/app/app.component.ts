import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import { ParentUser } from './parent-user';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Givi Jojua';

  readData  : any;

  usersData: any[5] = [
    { firstname: 'Saba', lastname: 'beridze', age: 22 },
    { firstname: 'Luka', lastname: 'karchava', age: 24 },
    { firstname: 'Nana', lastname: 'gogilashvili', age: 21 },
    { firstname: 'Levani', lastname: 'mamaladze', age: 25 },
    { firstname: 'Giorgi', lastname: 'shakarashvili', age: 18 },
  ];

  parentUsersData : ParentUser[] = [{id: 1 , FirstName : 'Givi', LastName : "Jojua", DateOfBirth : new Date(), PhoneNumber  :  5235123, Email : "givi@gmail.com"},{id : 2,FirstName : 'Saba', LastName : "Lobjanidze", DateOfBirth : new Date(), PhoneNumber  :  555325565, Email : "Saba@gmail.com"}]

  takeData(data : any){
    this.readData = data;
  }

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    surname: [''],
    address: this.fb.group({
      id: [],
      phonenumber: [''],
      email: [''],
    }),
  });


  
}
