import {instance} from "common/api/common.api";

import {
    AddNewPackResponseType,
    ArgAddNewPack, ArgChangePack, ArgDeletePack, ArgGetPacksType, ChangePackResponseType, DeletePackResponseType,
    GetPacksResponseType
} from "features/packs/packs.apiTypes";


export const packsApi = {

    getPacks: (payload: ArgGetPacksType) => {
        return instance.get<GetPacksResponseType>('/cards/pack', {
            params: { ...payload } || {}
        })
    },
    addPack: (arg: ArgAddNewPack) => {
        return instance.post<AddNewPackResponseType>('/cards/pack/', {
            cardsPack: arg
        })
    },
    changePack: (arg: ArgChangePack) => {
        return instance.put<ChangePackResponseType>('/cards/pack/', {
            cardsPack: arg
        })
    },
    deletePack: (arg: ArgDeletePack) => {
        return instance.delete<DeletePackResponseType>('/cards/pack/', {
            params: arg
        })
    },

}

