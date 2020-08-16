import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfordirective',
  templateUrl: './ngfordirective.component.html',
  styleUrls: ['./ngfordirective.component.css']
})
export class NgfordirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  details=[
    {id:1,name:"Razik",dept:"web developer",sal:"30,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:2,name:"Navdeep",dept:"web designer",sal:"22,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:3,name:"Aman",dept:"Android developer",sal:"35,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:4,name:"Sachin",dept:"Kotlin developer",sal:"48,000",img:"../assets/images/Razikkhan.jpeg"},{id:3,name:"Aman",dept:"Android developer",sal:"35,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:4,name:"Sachin",dept:"Kotlin developer",sal:"48,000",img:"../assets/images/Razikkhan.jpeg"},{id:3,name:"Aman",dept:"Android developer",sal:"35,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:4,name:"Sachin",dept:"Kotlin developer",sal:"48,000",img:"../assets/images/Razikkhan.jpeg"},{id:3,name:"Aman",dept:"Android developer",sal:"35,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:4,name:"Sachin",dept:"Kotlin developer",sal:"48,000",img:"../assets/images/Razikkhan.jpeg"},{id:3,name:"Aman",dept:"Android developer",sal:"35,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:4,name:"Sachin",dept:"Kotlin developer",sal:"48,000",img:"../assets/images/Razikkhan.jpeg"},{id:3,name:"Aman",dept:"Android developer",sal:"35,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:4,name:"Sachin",dept:"Kotlin developer",sal:"48,000",img:"../assets/images/Razikkhan.jpeg"},{id:3,name:"Aman",dept:"Android developer",sal:"35,000",img:"../assets/images/Razikkhan.jpeg"},
    {id:4,name:"Sachin",dept:"Kotlin developer",sal:"48,000",img:"../assets/images/Razikkhan.jpeg"},
  ]

}
