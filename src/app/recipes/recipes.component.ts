import {Component, OnInit} from '@angular/core';
import {Recipe, RecipesService} from '../services/recipes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

}
