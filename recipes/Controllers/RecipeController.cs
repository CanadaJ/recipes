using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using recipes.Models;

namespace recipes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        [HttpGet]
        public Recipe GetRecipe(int recipeId)
        {
            return new Recipe
            {
                RecipeId = recipeId,
                Author = "Justin C",
                Name = "Red Beans & Rice",
                Description = "It's beans and rice",
                Ingredients = new List<Ingredient>
                {
                    new Ingredient
                    {
                        IngredientId = 1,
                        Amount = "2 cans",
                        Name = "dark red kidney beans"
                    },
                    new Ingredient
                    {
                        IngredientId = 2,
                        Amount = "2 cups",
                        Name = "rice"
                    }
                }
            };
        }
    }
}