import { instance } from "common/api/common.api";

import {GetPacksResponseType} from "features/packs/packs.apiTypes";


export const packsApi = {

	getPacks: () => {
		return instance.get<GetPacksResponseType>('/cards/pack')
	},

}

