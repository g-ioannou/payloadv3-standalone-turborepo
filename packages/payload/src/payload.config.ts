import { buildConfig, type SanitizedConfig, type Config } from 'payload';

import { Users } from './collections/Users';
import { Media } from './collections/Media';

import path from 'path';
import { fileURLToPath } from 'url';
import { postgresAdapter } from '@payloadcms/db-postgres';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ''
    },
    // prodMigrations: migrations, // this will cause turbo build to stall
    push: false,
  }),
  plugins: [
    // storage-adapter-placeholder
  ]
};

/*
 * A default SanitizedConfig export is needed when running payload commands (e.g. payload migrate:status)
 * , but when another application needs to build the config we get an error because payload tries to run
 * SQL code that redifines table relations etc. . So, during runtime the default export is undefined, but
 * during scripts it's a SanitizedConfig.
 *
 * NOTE: maybe this could be avoided by somehow setting automatic run of migrations to false
 */
let sanitizedConfig: SanitizedConfig | undefined;

try {
  sanitizedConfig = await buildConfig(config);
} catch (e) {
  console.warn('Payload config already built');
}

export default sanitizedConfig;
