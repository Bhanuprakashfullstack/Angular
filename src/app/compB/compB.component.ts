import { Component } from "@angular/core";





@Component(
    {
        selector : 'comp-B',
        templateUrl :'./compB.component.html',
        styleUrls :['./compB.component.css']
    }
)
export class compBcomponent{


    
  colorType="red";

  EmployeType="bad";


  studentName="Bhanu prakash raju"

  
  Myname="prakash";

  eventclick(element:any){
    window.alert(element)
  }


  Names=["bhanu","kala","kalabhanu"]

  studentId="1";

  roleid="5";


  othername="sekhar";

    
}

