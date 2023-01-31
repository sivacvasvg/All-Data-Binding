import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  reg: number = 20191061517135;
  userName: string = "Siva";
  userEmail: string = "sivacvasvg@gmail.com";
  isDisabled: boolean = true;
  sample:string="";
  myChange() {
    if (this.userName == "Siva") {
      this.userName = "Sanjey";
    } else {
      this.userName = "Siva";
    }
  }

   }


