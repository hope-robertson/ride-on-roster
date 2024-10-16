// import { Knex } from 'knex';
import { generateShifts } from './utils/roster'

export async function seed(knex) {
  await knex('roster').insert({
    startDate: new Date(),
    shifts: generateShifts(new Date()),
  })
}
