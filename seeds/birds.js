exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        { id: 1, name: 'Tui' }
      ])
    })
};