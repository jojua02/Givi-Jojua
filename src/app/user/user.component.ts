import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() data : any;
  @Output() childData = new EventEmitter();

  childUserData : ChildUser[] = [{id : 3, FirstName : 'Tamazi', LastName : "Arabidze", DateOfBirth : new Date(), PhoneNumber  :  5543243767, Email : "tamazi@gmail.com"},{id : 4, FirstName : 'Guram', LastName : "Mumladze", DateOfBirth : new Date(), PhoneNumber  :  516772565, Email : "mumladze@gmail.com"}]

  sendData(){
    this.childData.emit(this.childUserData);
  }
}
