import {Injectable} from '@angular/core';
import {endWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      title: 'Fajitas Mexicanas',
      description: 'This is a longer.',
      image: 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5b3e104aae08b53d3e0fa0a2-d75f9cbe.jpg',
      serves: 5,
      preparation_time: 50,
      badges: [],
      category: 'Snacks',
      stars: 2,
      ingredients: ['Fajitas', 'Tomate', 'Lechuga', 'Pollo'],
      steps: ['Cortar la carne en trocitos', 'Calentar la tortilla en la sartén 2 min']
    },
    {
      title: 'Fajitas Mexicanas',
      description: 'This is a longer.',
      image: 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5b3e104aae08b53d3e0fa0a2-d75f9cbe.jpg',
      serves: 5,
      preparation_time: 50,
      badges: [],
      category: 'Snacks',
      stars: 2,
      ingredients: [],
      steps: []
    },
    {
      title: 'Hamburguesa de tofu con anacardos',
      description: 'This card has supporting text below as a natural lead-in to additional content.',
      image: 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5b3e108cae08b53dc136c3d2-aebd7b30.jpg',
      serves: 2,
      preparation_time: 30,
      badges: ['Rápido'],
      category: 'Carnes',
      stars: 4,
      ingredients: [],
      steps: []
    },
    {
      title: 'Solomillo de cerdo con esparragos y papas',
      description: 'Solomillo de cerdo ibérico marinado con pimienta con acompañamiento de espárragos y papas horneadas. Perfecto para deslumbrar una cena con los amigos.',
      image: 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5b3e10b930006c23fb578482-33ce4cf8.jpg',
      serves: 1,
      preparation_time: 45,
      badges: ['Vegano', 'Japonés'],
      category: 'Carnes',
      stars: 4.2,
      ingredients: [],
      steps: []
    },
    {
      title: 'Pescaito d\'la mama rico rico',
      description: 'Una lubinita al horno que se queda para shuparse los deos oiga',
      image: 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/w35-r11-d03e91e3.jpg',
      serves: 3,
      preparation_time: 50,
      badges: ['Mama'],
      category: 'Pescado',
      stars: 2.5,
      ingredients: [],
      steps: []
    }
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  searchRecipe(term: string): Recipe[] {
    const foundedRecipes: Recipe[] = [];
    term = term.toLowerCase();

    for (const recipe of this.recipes) {
      const recipeTitle = recipe.title.toLowerCase();
      if (recipeTitle.indexOf(term) >= 0) {
        foundedRecipes.push(recipe);
      }
    }

    return foundedRecipes;
  }
}

export interface Recipe {
  title: string;
  description: string;
  image: string;
  serves: number;
  preparation_time: number;
  badges: string[];
  category: string;
  stars: number;
  ingredients: string[];
  steps: string[];
}















