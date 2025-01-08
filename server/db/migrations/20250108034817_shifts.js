export async function up(knex) {
  await knex.schema.createTable('shifts', (table) => {
    table.increments('id').primary()
    table.string('day').notNullable() // Day of the week (e.g., 'Monday', 'Tuesday')
    table.time('start_time').notNullable() // Start time of the shift
    table.time('end_time').notNullable() // End time of the shift
    table.boolean('available').defaultTo(true) // Indicates if the shift is available for assignment
  })
}

export async function down(knex) {
  await knex.schema.dropTable('shifts')
}
