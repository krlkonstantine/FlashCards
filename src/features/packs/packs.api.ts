import { instance } from "common/api/common.api";

import {
	AddNewPackResponseType,
	ArgAddNewPack, ArgChangePack,
	ArgDeletePack, ChangePackResponseType, DeletePackResponseType,
	GetPacksResponseType
} from "features/packs/packs.apiTypes";


export const packsApi = {

	getPacks: () => {
		return instance.get<GetPacksResponseType>('/cards/pack')
	},
	addPack: (arg: ArgAddNewPack) => {
		return instance.post<AddNewPackResponseType>('/cards/pack/',arg)
	},
	deletePack: (id: string) => {
		return instance.delete<DeletePackResponseType>('/cards/pack/', {
			params:{id}
		})
	},
	changePack: (arg: ArgChangePack) => {
		return instance.put<ChangePackResponseType>('/cards/pack/',arg)
	},

}

