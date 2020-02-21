const express = require('express');

const recipes = require('./recipeModel.js');

const router = express.Router();

//get all recipes in database
router.get('/', (req, res) => {
    recipes.find()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({error: "Failed to get recipes"});
    });
});

//get recipe by id in database
router.get('/:id', (req, res) => {
    const id = req.params.id;

    recipes.findById(id)    
    .then(recipe => {
        if(recipe){
            res.status(201).json(recipe)
        } else {
            res.status(404).json({message: "Could not retrieve recipe with specified ID"})
        }        
    })
    .catch(error => {
        res.status(500).json({error: "Error occurred while retrieving data"})
    });
});

//get directions by recipe id
router.get('/:id/directions', (req, res) => {
    const id = req.params.id;

    recipes.findDirections(id)
    .then(dir => {
        if(dir.length){
            res.status(200).json(dir);
        } else {
            res.status(404).json({message: "Could not find directions for this recipe"});
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Failed to get directions for this recipe"});
    });
});

//get ingredients by recipe id
router.get('/:id/ingredients', (req, res) => {
    const id = req.params.id;

    recipes.getShoppingList(id)
    .then(ing => {
        console.log(ing)
        if(ing.length){
            res.status(200).json(ing);
        } else {
            res.status(404).json({ message: "Failed to find ingredients for this recipe"});
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to process request"});
    });
});

//create new recipe
router.post('/', (req, res) => {
    const newInfo = req.body;

    recipes.add(newInfo)
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(error => {
        res.status(500).json({error: "Failed to create new recipe"})
    });
});

//edit recipe by id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    
    recipes.findById(id)
    .then(recipe =>{
        if(recipe){
            recipes.update(changes, id)
            .then(updatedRecipe => {
                res.status(200).json(updatedRecipe)
            });
        } else {
            res.status(404).json({message: "Failed to find recipe with ID"})
        }
    })
    .catch(error => {
        res.status(500).json({error: "Failed to update recipe"});
    });
});

//delete recipe by id
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    recipes.remove(id)
    .then(deleted => {
        if(deleted){
            res.status(200).json({message: "Recipe went bye bye!"})
        } else {
            res.status(404).json({message: "No recipe found by ID"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Could not delete recipe"})
    });
});






module.exports = router;