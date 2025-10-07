import { Component } from "@angular/core";





@Component(
    {
        selector : 'comp-A',
        templateUrl :'./comA.component.html',
        styleUrls :['./comA.component.css']
    }
)
export class compAcomponent{

studentName:string="Bhanu prakash raju";
studentAge:number=22;
  studentid:number=15;
  studentGender:string="Male";
  getstudentdetails(){
    return"Aits";
  }

  // property binding
  name="Enter your name"
  secondname="Enter your second name"
  inputtype="checkbox"

  eventclick(){
    window.alert("submit")
  }

  event(){
    window.alert("Hi this is bhanu's angular")
  }

  roleId=1;

  customerRole="devolper";


  evntmouseover(testvalue:string){
    console.log(testvalue);
  }


  getstudent(){
    console.log("hello")
  }

studentname:string="king"
click(kala:string){
  console.log(kala)







}

}