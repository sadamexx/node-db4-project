
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.varchar('name', 128)
            .notNullable();
    })   
    .createTable('recipe_ingredients', tbl => {
        tbl.float('quantity')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')    
    })
    .createTable('directions', tbl => {
        tbl.increments();
        tbl.integer('step_number')
            .notNullable();
        tbl.varchar('directions', 256)
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')    
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('directions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
