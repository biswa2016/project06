import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( ) { }

  getm(){
    return[
      {id:1,cname:"company1",companyDecription:"Company1 Decription",year:2010},
      {id:2,cname:"company2",companyDecription:"Company2 Decription",year:2010},
      {id:3,cname:"company3",companyDecription:"Company3 Decription",year:2010},
      {id:4,cname:"company4",companyDecription:"Company4 Decription",year:2010},
      {id:5,cname:"company5",companyDecription:"Company5 Decription",year:2010},
      {id:6,cname:"company6",companyDecription:"Company6 Decription",year:2010},
      {id:7,cname:"company7",companyDecription:"Company7 Decription",year:2010},
      {id:8,cname:"company8",companyDecription:"Company8 Decription",year:2010},
      {id:9,cname:"company9",companyDecription:"Company9 Decription",year:2010},
      {id:10,cname:"company10",companyDecription:"Company10 Decription",year:2010}
    ]
  }

  getu(){
   return [
      {id:1,Companygn:"GSTIN1",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},
      {id:2,Companygn:"GSTIN2",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},   {id:3,Companygn:"GSTIN3",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},
      {id:4,Companygn:"GSTIN4",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},    {id:5,Companygn:"GSTIN5",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},
      {id:6,Companygn:"GSTIN6",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},    {id:7,Companygn:"GSTIN7",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},
      {id:8,Companygn:"GSTIN8",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},   {id:9,Companygn:"GSTIN9",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'},
      {id:10,Companygn:"GSTIN10",brance:'Bangalore,Hyderabad,Chennai',Technologies:"HTML,CSS,JAVASCRIPT",State:"karnataka" ,contry:'India'}  ]

  }
}
