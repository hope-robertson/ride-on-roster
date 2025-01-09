// import { Knex } from 'knex'

export async function seed(knex) {
  await knex('clerks').insert([
    { name: 'Nick' },
    { name: 'John' },
    { name: 'Hope' },
    { name: 'Maxwell' },
    { name: 'Daniel' },
    { name: 'Harry' },
    { name: 'Raven' },
    { name: 'Jonathan' },

    // ... other employees
  ])
}
