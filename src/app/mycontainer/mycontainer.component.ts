import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycontainer',
  templateUrl: './mycontainer.component.html',
  styleUrls: ['./mycontainer.component.css']
})
export class MycontainerComponent implements OnInit {


  constructor() {
    
  }

  


  ngOnInit(): void {


  }

  

  message:string="";
  cart()
  {
    this.message="item added in your cart"
  }


  msg:string="";
  myfun(event)
  {
    this.msg=event.target.value + " added to your cart";
  }


  cartitems:string="";
  item(val)
  {
    this.cartitems=val.target.value +" is added in your cart";
  }

  refvar:string="";

  ref(temp)
  {
    this.refvar=temp.value;
    console.log(temp);
  }


  inputcontent="";



  isvalid=false;

  dir()
  {
    this.isvalid=true;
  }

   
}
