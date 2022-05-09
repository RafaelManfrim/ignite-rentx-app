import { Database } from "@nozbe/watermelondb";
import SQLAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schemas } from './schema'
import { User } from "./model/User";

const adapter = new SQLAdapter({ schema: schemas })

export const database = new Database({
  adapter,
  modelClasses: [User]
})
