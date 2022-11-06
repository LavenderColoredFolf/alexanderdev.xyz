import {id} from 'alistair/id';
import {api} from '../../server/api';

export default api({
	async GET() {
		return {
			ping: 'ponging the ping',
			time: Date.now(),
			id: id(),
		};
	},
});
