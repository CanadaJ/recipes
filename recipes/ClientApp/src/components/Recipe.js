import React, { Component } from 'react';

export class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null,
            loading: true
        }
    }

    componentDidMount() {
        this.getRecipe();
    }

    async getRecipe() {
        const response = await fetch('api/recipe/?recipeId=1');
        const data = await response.json();

        this.setState({
            recipe: data,
            loading: false
        });
    }

    renderIngredients() {
        return (
            <ul>
                {this.state.recipe.ingredients.map(i => {
                    return <li>{i.ingredientId} - {i.amount} {i.name}</li>
                })}
            </ul>
        );
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        let recipe = this.state.recipe;

        return (
            <div>
                <h1>{recipe.recipeId} - {recipe.name}</h1>
                <h2>By {recipe.author}</h2>
                <p>
                    {recipe.description}
                    {this.renderIngredients()}
                </p>
            </div>
        )
    }
}