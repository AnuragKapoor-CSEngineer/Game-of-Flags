import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service'
@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class FlagsComponent implements OnInit {
  
  name:any = "";
  country:any;
  countryName:any ="";
  country1:any;
  country2:any;
  countryISOCode:any;
  country3:any;
  country4:any;
  ans:any;
  p:any=0;
  constructor(private cService: CountriesService) { }
  start()
  { 
    
    this.country = this.cService.getCountries();
    let random = Math.floor(Math.random()*this.country.length)
    this.countryName= this.country[random].name;
    this.countryISOCode = (this.country[random]['alpha-2']);     // due to minus we acess it in different manner not in the regular manner
    this.countryISOCode = this.countryISOCode.toLowerCase();
    console.log(this.countryName);
     let lrandom= Math.random();
     let i= Math.floor(lrandom*this.country.length)
     this.country1 = this.country[i].name;
    
     let rrandom= Math.random();
     let j= Math.floor(rrandom*this.country.length)
     this.country2 = this.country[j].name;

     let krandom= Math.random();
     let k= Math.floor(krandom*this.country.length)
     this.country3 = this.country[k].name;
     
     let zrandom= Math.random();
     let z= Math.floor(zrandom*this.country.length)
     this.country4 = this.country[z].name;
     
    
 let  a =Math.floor(Math.random()*111);

     
if (a <=25)
{ 
  this.country1=this.countryName;
  console.log(a);
  
}
else if ( a<=50 && a>25)
{ 
  this.country2=this.countryName;
  console.log(a);
}
else if ( a<=75 && a>50)
{ 
  this.country3=this.countryName;
  console.log(a);
}
else 
{ 
  this.country4=this.countryName;
  console.log(a);
}
  }
  start1()
  {
    this.p=0;
    this.ans="";
    this.start();
  }
  option1()
  {
   
     if(this.countryName == this.country1)
     {
      this.ans="Correct";
       this.p++;
       this.p = this.p++;
      this.start();
     }
    else
    {
      this.ans="Sorry Wrong Answer";
      this.p--;
      this.start();
    }
  }
  option2()
  {
      
    if(this.countryName == this.country2)
    {
     this.ans="Correct";
    this.p++;
  
     this.start();
    }
   else
   {
     this.ans="Sorry Wrong Answer";
     this.p--;
     this.start();
   }
    }
    option3()
    {
        
      if(this.countryName == this.country3)
     {
      this.ans="Correct";
       this.p++;
    
      this.start();
     }
    else
    {
      this.ans="Sorry Wrong Answer";
      this.p--;
      this.start();
    }
      }
      option4()
      {
          
        if(this.countryName == this.country4)
        {
         this.ans="Correct";
          this.p++;
        
         this.start();
        }
       else
       {
         this.ans="Sorry Wrong Answer";
         this.p--;
         this.start();
       }
        }
  ngOnInit() {
  }

}
