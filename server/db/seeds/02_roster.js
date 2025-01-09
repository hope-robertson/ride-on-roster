// import { Knex } from 'knex';
// import { generateShifts } from '../../utils/roster'

export async function seed(knex) {
  await knex('roster').insert({
    start_date: new Date(),
  })
}
