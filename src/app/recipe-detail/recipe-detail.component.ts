import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.recipe = recipesService.getRecipe(params['id']);
    });

  }

  ngOnInit() {
  }

}
