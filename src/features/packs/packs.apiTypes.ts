//types


//GET PACKS
export type ArgGetPacksType = {
    packName?: string; // не обязательно
    min?: number; // не обязательно
    max?: number; // не обязательно
    sortPacks?: string; // не обязательно TODO
    page?: number; // не обязательно
    pageCount?: number; // не обязательно
    user_id?: string; // чьи колоды не обязательно, или придут все
    block?: boolean;
};

export type GetPacksResponseType = {
    cardPacks: CardPacksType[];
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    token: string;
    tokenDeathTime: number;
}

export type CardPacksType = {
    actions: any;
    _id: string;
    user_id: string;
    user_name: string;
    name: string;
    private: boolean;
    path: string;
    grade: number;
    shots: number;
    cardsCount: number;
    type: string;
    rating: number;
    more_id: string;
    created: string;
    updated: string;
    __v: number;
}


//ADD NEW PACK
export type ArgAddNewPack = {
        name?: string // если не отправить будет "no Name"
        deckCover?: string // не обязателен
        private?: boolean // если не отправить будет false
}

export type AddNewPackResponseType = {
    more: {
        body: {
            name: string
        }
    },
    "error": string,
    "in": string,
    "info": string
}

//CHANGE PACK
export type ArgChangePack = {
    _id: string
    name?: string
}

export type ChangePackResponseType = {
    updatedCardsPack: any
}
//DELETE PACK
export type ArgDeletePack = {
    id: any
}

export type DeletePackResponseType = {
    deletedCardsPack: any
}
