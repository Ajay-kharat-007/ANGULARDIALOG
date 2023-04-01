import { Component, OnInit } from '@angular/core';
import { UserDataService } from './service/user-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ANGULARDIALOG';
  users: any;

  constructor(
    private service: UserDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.service.getUser().subscribe((res) => {
      this.users = res
    })
  }

  deleteUser(id: any) {
    this.service.deleteUser(id).subscribe((res) => {
      console.log(res)
      alert("users deleted")
    })
  }

  openBox(data: any) {
    const dialogRef = this.dialog.open(ChildComponent, {
      data
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUserList()
        }
      }
    })
  }

}
