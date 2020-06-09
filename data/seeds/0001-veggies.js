exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("veggies")
    .truncate() // Removes rows AND resets id back to 1
    .then(function () {
      // Inserts seed entries
      return knex("veggies").insert(generateData());
    });
};

function generateData() {
  return [
    { name: "broccoli", color: "green", tasty: true },
    { name: "bell pepper", color: "red", tasty: false },
    { name: "cauliflower", color: "white", tasty: true },
    { name: "celery", color: "green", tasty: true },
  ];
}
