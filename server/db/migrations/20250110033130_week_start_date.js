export async function up(knex) {
  await knex.schema.alterTable('shift_assignments', (table) => {
    table.date('week_start_date').notNullable().after('assigned_at')
  })
}

export async function down(knex) {
  await knex.schema.table('shift_assignments', (table) => {
    table.dropColumn('week_start_date')
  })
}
