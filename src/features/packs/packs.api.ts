import {instance} from "common/api/common.api";

import {
    AddNewPackResponseType,
    ArgAddNewPack, ArgChangePack,
    ArgDeletePack, ArgGetPacksType, ChangePackResponseType, DeletePackResponseType,
    GetPacksResponseType
} from "features/packs/packs.apiTypes";


export const packsApi = {

    getPacks: (arg: ArgGetPacksType) => {
        return instance.get<GetPacksResponseType>('/cards/pack', {
            params: arg
        })
    },
    addPack: (arg: ArgAddNewPack) => {
        return instance.post<AddNewPackResponseType>('/cards/pack/', {
            cardsPack: arg
        })
    },
    deletePack: (id: string) => {
        return instance.delete<DeletePackResponseType>('/cards/pack/', {
            params: {id}
        })
    },
    changePack: (arg: ArgChangePack) => {
        return instance.put<ChangePackResponseType>('/cards/pack/', arg)
    },

}

