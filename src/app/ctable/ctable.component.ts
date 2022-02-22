import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../cservice/services.service';

@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.css']
})
export class CtableComponent implements OnInit {
 values:any
 value:any
 flag:boolean=false
  // route: any;
  constructor(private user:ServicesService,private data:ServicesService) { }

  ngOnInit(): void {
    this.values=this.user.getm()
    // this.value= this.data.getu()

  }

  display(data: any){
    // console.log(data.id);
    // console.log(this.value.id);
    this.value=data

        this.flag=true
    // console.log(data);
    // this.data.navigate(['cd'])
    
  }

 

}
