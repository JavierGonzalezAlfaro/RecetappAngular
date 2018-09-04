import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {AboutComponent} from './about/about.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipe/:id', component: RecipeDetailComponent},
  {path: 'search/:term', component: SearchComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
