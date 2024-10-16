// import { Knex } from 'knex'

export async function seed(knex) {
  await knex('roles').insert([
    { name: 'admin' },
    { name: 'user' },
    // ... other roles
  ])
}
