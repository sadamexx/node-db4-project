const db = require('../dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    findDirections,
    getShoppingList,
    remove,
    update

};

//adds a new recipe to database
function add(recipe){
    return db('recipes')
    .insert(recipe, 'id')
};

//gets all recipes in database
function find() {
    return db('recipes');
};

//gets recipe by id in database
function findById(id) {
    return db('recipes')
    .where({ id })
    .first();
};

//gets all steps related to a recipe(id)
function findDirections(id) {
    return db('directions')
    .join('recipes', "recipes.id", "directions.recipe_id")
    .select("directions.step_number", "directions.directions", "recipes.name")
    .where("recipe_id", id)
    .orderBy("step_number", "asc");
}

function getShoppingList(recipe_id){

    return db('ingredients')    
    .join('recipe_ingredients as ri', "ri.ingredient_id", "ingredients.id")
    .select("ingredients.name", "ri.quantity")
    .where({recipe_id})
    
};

//deletes from database
function remove(id){
    return db('recipes')
    .where({ id })
    .del();
};


//edits recipe by id in database
function update(changes, id) {
    return db('recipes')
    .where({ id })
    .update(changes);
};