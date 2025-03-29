import { config } from '@repo/payload/config';
import {buildConfig, getPayload as _getPayload} from '@repo/payload/payload'

export const getPayload = async () => {
	try {
		const payloadConfig = await buildConfig(config);
		const payload = await _getPayload({ config: payloadConfig });
		return payload
	} catch (e) {
		console.error(e)

	}
};
