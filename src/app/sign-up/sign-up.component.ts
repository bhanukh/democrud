import { Component, Input ,Output} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  displayName='';

  userData:any={};
  getData(data:NgForm){
    console.log(data)
    this.userData=data
  }
  getvalue(val:string){
       console.log(val)
       this.displayName=val
  }
}
