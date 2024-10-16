import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  await knex('clerks').insert([
    { name: 'Nick', role: 'admin', status: true },
    { name: 'John', role: 'admin', status: true },
    { name: 'Tech Support', role: 'admin', status: true },
    { name: 'Employee 1', role: 'user', status: true },
    { name: 'Employee 2', role: 'user', status: true },
    { name: 'Employee 3', role: 'user', status: false }, // Inactive
    { name: 'Employee 4', role: 'user', status: true },

    // ... other employees
  ])
}
