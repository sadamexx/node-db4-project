
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'chicken thigh'},
        { name: 'cream cheese'},
        { name: 'shoyu sauce'},
        { name: 'carrots'},
        { name: 'garlic'},
        { name: 'corn tortillas'},
        { name: 'cream of mushroom'},
        { name: 'jack cheese'},
        { name: 'shredded chicken breast'},
        { name: 'milk'},
        { name: 'onion'},
        { name: 'can of chili beans'},
        { name: 'green chilis'},
        { name: 'sugar'},
        { name: 'tortilla chips'},
        { name: 'cream of chicken'},
        { name: 'tortilla chips'}
      ]);
    });
};
