// storage-adapter-import-placeholder
import dotenv from 'dotenv';
import { buildConfig, type Config } from 'payload';

import { Users } from './collections/Users';
import { Media } from './collections/Media';

import path from 'path';
import { fileURLToPath } from 'url';
import { postgresAdapter } from '@payloadcms/db-postgres';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const config: Config = {
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname
    }
  },
  collections: [Users, Media],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: [dirname, 'payload-types.ts'].join('/')
  },
  // @ts-ignore
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ''
    }
  }),
  plugins: [
    // storage-adapter-placeholder
  ]
};

export default buildConfig(config);
