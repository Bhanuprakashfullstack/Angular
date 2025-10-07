import { Component, ContentChild, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";





@Component(
    {
        selector : 'comp-C',
        templateUrl :'./compC.component.html',
        styleUrls :['./compC.component.css']
    }
)
export class compCcomponent{

@ViewChild('paragraph') p1 : ElementRef;
@ViewChild('spanName') f1:ElementRef;
@ViewChild('firstname') firstname:ElementRef;




btnclick(){
    console.log(this.p1);
    console.log(this.p1.nativeElement);

    console.log(this.f1);
    console.log(this.f1.nativeElement);


    
    console.log(this.firstname);
    console.log(this.firstname.nativeElement.value);
    
}

@ContentChild('fristname') lastname:ElementRef;
@ContentChild('jobtitle') jobtitle:ElementRef;

btnmouse(){
    console.log(this.jobtitle.nativeElement.value);
}    


@ViewChild('testtemplate') template1:TemplateRef<any>;

@ViewChild('containerRef',{read:ViewContainerRef}) containerRef:ViewContainerRef;
// @ViewChild('containerRef')   v1:ViewContainerRef;

btnckick(){




    // console.log(this.containerRef);



    this.containerRef. insert(this.template1.createEmbeddedView(null));



}

}
