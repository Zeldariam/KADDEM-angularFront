import { Component, OnInit } from '@angular/core';
import { Agent } from 'http';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepartService } from 'src/app/service-depart.service';
import { MatButtonModule } from '@angular/material/button';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const list2:Departement[]=[
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
@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})


export class ListDepartementComponent implements OnInit {
  product:any[]=[]
  list:any[]=[]
  nomDepartement:String="";
  /*********** ZELDA ADDED  *******************************************/
  list3:Departement[]=[
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
  displayedColumns: string[] = ['ID', 'Département' ];
  dataSource = list2;
  

/************************ END ZELDA ADDED************************************************* */
  constructor(
    private serviceDepar:ServiceDepartService,
    ) { }

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
