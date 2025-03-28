import { getPayload } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const P = await getPayload();

    console.log(await P?.find({ collection: 'users' }))
	return await P?.find({ collection: 'users' });
};
