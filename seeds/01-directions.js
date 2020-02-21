
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('directions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('directions').insert([
        {step_number: 1, directions: "Combine all ingredients except corn starch and green onions in large pot. Bring to a boil. Reduce to low and simmer. Rotate chicken occasionally until tender. (about 30 mins)", recipe_id: 1},
        {step_number: 2, directions: "Remove chicken to serving platter. Remove garlic and ginger. Bring sauce to boil. After 10 mins, reduce heat and whisk in cornstarch. Bring to boil. Remove from heat, add chicken. Serve chicken with sauce and top with green onions", recipe_id: 1},
        {step_number: 1, directions: "Open the can of beans. Add to microwave safe bowl. Add block of cream cheese. Microwave until combines well and smooth.", recipe_id: 3},
        {step_number: 2, directions: "After mixture is smooth, open bag of tortilla chips. Chomp and enjoy. No double dipping", recipe_id: 3}
      ]);
    });
};
