import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})
export class SKUComponent implements OnInit {
  url='./assets/data.json';
  items=[];
  constructor(private http:HttpClient){
    this.http.get(this.url).toPromise().then(data =>{
      console.log(data);

      for(let item in data)
        if(data.hasOwnProperty(item))
        this.items.push(data[item]);
    });
  }


  ngOnInit(): void {
  }

 
}
