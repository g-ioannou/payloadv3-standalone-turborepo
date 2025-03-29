import { building } from '$app/environment';
import config from '@repo/payload/config';
import { getPayload as _getPayload, type Payload } from '@repo/payload/payload';

declare global {
	/* eslint-disable no-var*/
	var payload: Payload | undefined;
	/* eslint-enable no-var*/
}

const getPayload = async () => {
	if (building) return;
	if (!config) return;

	try {
		return await _getPayload({ config });
	} catch (e) {
		console.error(e);
	}
};

export const payload: Payload | undefined = globalThis.payload ?? (await getPayload());
