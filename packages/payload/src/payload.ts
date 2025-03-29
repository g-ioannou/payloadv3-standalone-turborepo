import { buildConfig, getPayload } from 'payload';

export * from 'payload';

import { config } from './payload.config';

export const P = await getPayload({ config: await buildConfig(config) });
