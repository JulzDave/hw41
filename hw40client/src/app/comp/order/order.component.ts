import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  lunch: any[] = [];
  beverages: any[] = [];
  desserts: any[] = [];

  selected_lunch: string = "Taco Salad";
  selected_beverages: string = "Water";
  selected_desserts: string = "Sabana Caramel";

  ngOnInit() {
    this.http.get('/api/restaurant/menu').subscribe(data => {
      console.log(data)
      this.lunch = data[0].our_meals
      this.beverages = data[0].our_drinks
      this.desserts = data[0].our_desserts
    })
  }

  sendOrder() {
    this.http.post('/api/restaurant/', {
      Beverages: this.selected_beverages,
      Lunch: this.selected_lunch,
      Desserts: this.selected_desserts
    }).subscribe(data => {
      console.log(data)

    })
    alert("Ordered successfully!")
  }

}
