
exports.up = function(knex) {
  return knex.schema.createTable('characters', tbl=>{
      tbl.increments()


      tbl.string('names',256).notNullable().index()

    tbl.string('house', 128)

    tbl.string('origin',256)

    tbl.boolean('alive').defaultTo(true)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters")
};
