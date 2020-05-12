import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tco } from '../models/tco.model';
import {SKUComponent } from '../sku/sku.component';

@Component({
  selector: 'app-tco',
  templateUrl: './tco.component.html',
  styleUrls: ['./tco.component.scss']
})
export class TCOComponent implements OnInit {
  url='./assets/tco.json';
  url1='./assets/tarrif.json';
  tcoitems=[];
  tarrifitems=[];
  constructor(private http:HttpClient){
    this.http.get(this.url).toPromise().then(tco =>{
      console.log(tco);

      for(let item in tco)
        if(tco.hasOwnProperty(item))
        this.tcoitems.push(tco[item]);
    });
    
    this.http.get(this.url1).toPromise().then(tarrif =>{
      for(let item in tarrif)
      if(tarrif.hasOwnProperty(item))
      this.tarrifitems.push(tarrif[item]);
    });
    
}

ngOnInit(): void {
  }
}

