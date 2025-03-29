import { payload as P } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await P?.find({ collection: 'users' });
};
