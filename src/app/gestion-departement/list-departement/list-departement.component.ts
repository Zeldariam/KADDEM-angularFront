import { Component, OnInit } from '@angular/core';
import { Agent } from 'http';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
  product:any[]=[]
  list:any[]=[]
  list2:any[]=[
    {
      idDepart: 1321,
      nomDepart: "Département de assoum"
    },
    {
      idDepart: 2423,
      nomDepart: "Département de A"
    },
    {
      idDepart: 1122,
      nomDepart: "Département de B"
    },
    {
      idDepart: 1589,
      nomDepart: "Département de C"
    },
    {
      idDepart: 4432,
      nomDepart: "Département de D"
    },
    {
      idDepart: 6579,
      nomDepart: "Département de E"
    },
    {
      idDepart: 6789,
      nomDepart: "Département de F"
    }
  ]
  constructor(private serviceDepar:ServiceDepartService) { }

  ngOnInit(): void {
    this.getListDepart();
   // alert(this.list);
   console.log(this.list)
  }
  getListDepart(){
    this.serviceDepar.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);
    
    }
    )
      
  }
  DeleteDepart(id:number)
  {
   
this.serviceDepar.delete(id).subscribe(
  data =>  {
  console.log(data);
this.getListDepart();
});} 


}
