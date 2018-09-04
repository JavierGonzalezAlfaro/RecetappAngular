import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe, RecipesService} from '../services/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  recipes: Recipe[] = [];
  searchTerm: string;

  constructor(
    private recipesService: RecipesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.recipes = this.recipesService.searchRecipe(this.searchTerm);
    });
  }

  showRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }

}
