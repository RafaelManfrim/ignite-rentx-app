import { tableSchema } from '@nozbe/watermelondb'

export const userSchema = tableSchema({
  name: 'users',
  columns: [
    { name: 'email', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'user_id', type: 'string' },
    { name: 'driver_license', type: 'string' },
    { name: 'avatar', type: 'string' },
    { name: 'token', type: 'string' },
  ]
})