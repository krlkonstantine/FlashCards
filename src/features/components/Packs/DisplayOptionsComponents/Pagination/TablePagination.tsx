import React, {ChangeEvent, useState} from 'react';
import {Pagination, TablePagination} from "@mui/material";
import {useAppDispatch, useAppSelector} from "common/hooks";
import {packsActions} from "features/packs/packs.slice";


export const TablePaginations = () => {
    const dispatch = useAppDispatch()
    const packs = useAppSelector((state) => state.packs)
    const page = useAppSelector((state) => state.packs?.page)
    const packsPerPageCount = useAppSelector((state) => state.packs.pageCount)
    const packsTotalCount = useAppSelector((state) => state.packs.cardPacksTotalCount)
    const [packsPerPage, setPacksPerPage] = useState<string>("4")

    const onRowsPerPageChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setPacksPerPage(event.target.value)
        dispatch(packsActions.setPacksPerPageCount({pageCount: +event.target.value}))
    }


    const onPageChangeHandler = (event: ChangeEvent<unknown>, page: number) => {
                dispatch(packsActions.setPageNumber({page}))
    }


    let totalPagesCount = packsPerPageCount && packsTotalCount && packsTotalCount > 0
        ? Math.ceil(packsTotalCount / packsPerPageCount)
        : 1


    return (
        <div>
            <Pagination
                count={totalPagesCount}
                shape="rounded"
                color="primary"
                onChange={onPageChangeHandler}
            />
            <div>
                <span>Show</span>
                <select
                    value={packsPerPage}
                    onChange={onRowsPerPageChangeHandler}>
                    <option value="4">4</option>
                    <option value="7">7</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <span>items per page</span>
            </div>
        </div>
    );
};
