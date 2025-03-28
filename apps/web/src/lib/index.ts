import { buildConfig, getPayload as _getPayload } from 'payload';
import { config } from '@repo/payload/config';

export const getPayload = async () => {
	try {
		const payloadConfig = await buildConfig(config);
		const payload = await _getPayload({ config: payloadConfig });
		return payload;
	} catch (e) {
		console.error(e)

	}
};
