import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('Steak', 
  'This recipe allows you to prepare a delicous steak in an hour or less of cook and prep time!', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1sxSHX_cyMc_7Z7j03WdzRAO5_8gCKkwLMUcmPyLxldpmjCJ8A'),
  new Recipe('Rib Eye', 'This recipe gives the perfect prep time for a rib eye steak', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIx8XsrdDYJ8tAjO9HlXTO12rhnYjskSPsMlJirox4wBKQKc4H')
  ];

  constructor() { }

  ngOnInit() {
  }

}
