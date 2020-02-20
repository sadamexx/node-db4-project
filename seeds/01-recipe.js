
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Shoyu Chicken'},
        { name: 'White Chicken Enchilada Casserole'},
        { name: 'Not for the Timid'}
      ]);
    });
};
