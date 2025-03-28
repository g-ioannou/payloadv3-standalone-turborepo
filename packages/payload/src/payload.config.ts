// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { type Config } from 'payload';

import { Users } from './collections/Users';
import { Media } from './collections/Media';

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const config: Config = {
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
    },
  },
  collections: [Users, Media],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: [dirname, 'payload-types.ts'].join('/'),
  },
  // @ts-ignore
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    // storage-adapter-placeholder
  ],
};

//export default buildConfig(config);
