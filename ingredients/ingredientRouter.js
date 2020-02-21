const express = require('express');

const ingredients = require('./ingredientModel.js');

const router = express.Router();

//get all ingredients in database
router.get('/', (req, res) => {
    ingredients.findAll()
    .then(ing => {
        res.status(200).json(ing)
    })
    .catch(error => {
        res.status(500).json({message: "Failed to get ingredients"});
    });
});

//get ingredient by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    ingredients.findIngById(id)
    .then(ing => {
        if(ing){
            res.status(200).json(ing);
        } else {
            res.status(404).json({ message: "Could not find ingredient by ID"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Could not retrieve data"})
    });
});

//get recipes by ingredient id
router.get('/:id/recipes', (req, res) => {
    const id = req.params.id;

    ingredients.findRecipes(id)
    .then(ing =>{
        if(ing.length){
            res.status(200).json(ing)
        } else {
            res.status(404).json({message: "Failed to find recipes using this ingredient"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Error occurred while retrieving data"});
    });
});

module.exports = router;
