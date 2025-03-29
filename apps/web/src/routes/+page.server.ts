import { getPayload } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const P = await getPayload();

	return await P?.find({ collection: 'users' });
};
