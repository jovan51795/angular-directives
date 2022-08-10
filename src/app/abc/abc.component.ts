import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from './users.interface';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss']
})
export class AbcComponent implements OnInit {
  public msg = "";

  users: Users[] = [
    {
      firstname: "Jovanie",
      lastname: "cabatuan",
      age: 18,
      isLegalAge: false
    },
    {
      firstname: "John",
      lastname: "Doe",
      age: 35,
      isLegalAge: true
    },
    {
      firstname: "Jane",
      lastname: "Doe",
      age: 13,
      isLegalAge: false
    },
    {
      firstname: "Joe",
      lastname: "Doe",
      age: 20,
      isLegalAge: true
    }
  ]

  // @Input() public parentData;
  // //@Input('parentData') public name; //also works
  // @Input() public counter;

  // @Output() public childEvent = new EventEmitter();
  // @Output() public eventEmeter = new EventEmitter()
  // constructor() { }

  ngOnInit(): void {
  }

  // sendMessage() {
  //   this.eventEmeter.emit(this.msg);
  // }

  // fireEvent = () => {
  //   this.childEvent.emit("Hey Jovanie cabatuan")
  // }



}
