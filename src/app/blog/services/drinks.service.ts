import { Injectable } from '@angular/core';
import { DrinkModule } from '../models/drinks.module';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  public getDrink(): DrinkModule[] {
    return [
      {
        "title": "Carmel Frappe",
        "info": "Mcdonalds"
      },
      {
        "title": "Turle Blender",
        "info": "Scooter"
      },
      {
        "title": "Water",
        "info": "Walmart"
      },
      {
        "title": "White Mocha",
        "info": "Scooter"
      },
      {
        "title": "Chocolate Milk",
        "info": "Fairlife"
      },
      {
        "title": "Vanilla",
        "info": "Mcdonald's"
      },
      {
        "title": "Oreo Tornado",
        "info": "Bubble Tea"
      },
      {
        "title": "Chocolate Shake",
        "info": "Mcdonald's"
      },
      {
        "title": "Caramel Blender",
        "info": "Scooter"
      }
    ]
  }

}
