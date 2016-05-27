import {Component} from '@angular/core';
import {ControlGroup, FormBuilder} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'bind-data-only-if-form-is-submitted-app',
  templateUrl: 'bind-data-only-if-form-is-submitted.component.html',
  styleUrls: ['bind-data-only-if-form-is-submitted.component.css']
})
export class BindDataOnlyIfFormIsSubmittedAppComponent {
  title = 'Angular2 bind data only if form is submitted';

  myForm:ControlGroup;
  originalUserName:string;

  constructor(private _formBuilder:FormBuilder) {
    this.originalUserName = 'abc';
    this.myForm = _formBuilder.group({
      userName: [this.originalUserName]
    });
  }

  onSubmit(form) {
    this.originalUserName = this.myForm.controls['userName'].value;
  }
}
