const db = require('../dbConfig.js');

module.exports = {
    findAll,
    findIngById,
    findRecipes
};

function findAll(){
    return db('ingredients');
};

function findIngById(id){
    return db('ingredients')    
    .where({ id })
    .first();
};

function findRecipes(id){
    return db('recipe_ingredients')
    .join('recipes', "recipes.id", "recipe_ingredients.recipe_id")
    .select("recipe.name")
    .join('ingredients', "ingredients.id", "recipe_ingredients.ingredient_id")
    .select('ingredients.name')
    .where({ id})
}