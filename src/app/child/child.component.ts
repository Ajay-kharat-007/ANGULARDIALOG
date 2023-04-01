import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { UserDataService } from '../service/user-data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: UserDataService,
    private dialog: MatDialogRef<ChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.userForm = this.builder.group({
      id: "",
      name: "",
      age: "",
      phone: "",
      email: "",
    })
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data)
  }

  registrUser() {
    if(this.userForm.valid){
      if(this.data){
        this.service.updateUser(this.data.id, this.userForm.value).subscribe((res)=>{
          console.log(res)
          alert("hotel updated successfully !!")
        })
        this.dialog.close(ChildComponent)

      }
    }else{
      this.service.postUser(this.userForm.value).subscribe((res)=>{
        alert("user added successfully")
      })
    }
  }


}
