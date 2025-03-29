import dotenv from 'dotenv';
import { buildConfig, getPayload } from 'payload';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export * from 'payload';

import { config } from './payload.config';

export const P = await getPayload({ config: await buildConfig(config) });
