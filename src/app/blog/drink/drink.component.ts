import { Component, OnInit } from '@angular/core';
import { DrinkModule } from '../models/drinks.module';
import { BlogsService } from '../services/drinks.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  public drinks: DrinkModule[] = [];
 

  constructor(public drinksService: BlogsService) { }

  ngOnInit(): void {
    this.drinks = this.drinksService.getDrink();
  }

}
