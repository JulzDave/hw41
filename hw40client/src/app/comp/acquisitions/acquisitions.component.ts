import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acquisitions',
  templateUrl: './acquisitions.component.html',
  styleUrls: ['./acquisitions.component.css']
})
export class AcquisitionsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  allOrders:any=[];
  id:string=""

  ngOnInit() :void {
    this.http.get('/api/restaurant/menu').subscribe(data => {
      
      (<any>data).shift();

        this.allOrders = data
        
    })
  }

  sent(ev){
    this.id = ev.target.parentElement.parentElement.id
   
    this.http.put('/api/restaurant/menu/'+this.id, {
      // Beverages: this.selected_beverages,
      // Lunch: this.selected_lunch,
      // Desserts: this.selected_desserts
    }).subscribe(data => {
      console.log(data)

    })

    this.ngOnInit()

  }

}
