import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psd',
  templateUrl: './psd.component.html',
  styleUrls: ['./psd.component.css']
})
export class PsdComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(32)
       ,Validators.pattern("[a-z]* *")]),
  });
  constructor() {

   }

  ngOnInit() {

  }
  onFormSubmit(value){
    console.log(value);
  }

}
