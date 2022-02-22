import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicesService } from '../cservice/services.service';

@Component({
  selector: 'app-cdetails',
  templateUrl: './cdetails.component.html',
  styleUrls: ['./cdetails.component.css']
})
export class CdetailsComponent implements OnInit , OnChanges{
  @Input()Data:any
 data:any
 val:any
 mData:any
  constructor(private user:ServicesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.Data);
    this.val=this.user.getu()
   let index= this.val.map((value: {id:any})=>{
      return value.id
    }).indexOf(this.Data.id);
    console.log(index);
    console.log(this.val[index]);
    

    this.mData={...this.Data,...this.val[index]}
    console.log(this.mData);
    
    


    
  }

  ngOnInit(): void {
    // console.log(this.Data);
    
  }




}
