/**
 * use this function to describe the changes to the
 * database schema for this migration.
 */
exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    // Primary key called id that autoincrements
    tbl.increments(); // instant primary key
    // Name field varchar(255)
    tbl.string("name", 255).notNullable().unique();
    tbl.string("color", 255);
  });
};

/**
 * this is where you describe how to undo the changes to the schema
 *  - if you add table in up, remove it from down
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};
