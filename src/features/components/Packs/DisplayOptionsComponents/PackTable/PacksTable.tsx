import TableSortLabel from "@mui/material/TableSortLabel";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppDispatch, useAppSelector} from "common/hooks";
import {PackOptions} from "features/components/Packs/DisplayOptionsComponents/PackOptions/PackOptions";
import {EditableSpan} from "common/components/EditableSpan/EditableSpan";
import {packsActions, packsThunks} from "features/packs/packs.slice";
import Box from "@mui/material/Box";
import {visuallyHidden} from "@mui/utils";



type Order = 'asc' | 'desc';


interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'cardsCount',
        numeric: true,
        disablePadding: false,
        label: 'Cards',
    },
    {
        id: 'updated',
        numeric: true,
        disablePadding: false,
        label: 'Last Updated',
    },
    {
        id: 'user_name',
        numeric: true,
        disablePadding: false,
        label: 'Created by',
    },
    {
        id: 'actions',
        numeric: true,
        disablePadding: false,
        label: 'Actions',
    },
];


interface EnhancedTableProps {
    onRequestSort: (property: string, event: React.MouseEvent<unknown>) => void;
    order: Order;
    orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {

    const {onRequestSort, order, orderBy} =
        props;

    const createSortHandler =
        (property: string) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(property, event);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}

                            {orderBy === headCell.id
                                ? (<Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>)
                                : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

//orderBy это тогл, который решает у кого будет показываться стрелка
//а вот отдельн order решает уже в какую сторону будет направлена стрелка

export function PacksTable_old() {

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>('updated');
    const dispatch = useAppDispatch()
    const packs = useAppSelector((state) => state.packs.packs)
    const userId = useAppSelector((state) => state.auth.profile?._id)

    const onPackTitleDoubleClickHandler = (packId: string, newValue: string) => {
        dispatch(packsThunks.changePack({_id: packId, name: newValue}))
    }

    const handleRequestSort = (property: string, event: React.MouseEvent<unknown>) => {
        //the backend waits for sorting a value consisting of two parts
        //the first part of value is 0 or 1, 0 associated to descending
        //and 1 for ascending sorting accordingly.
        //The second part is the row to be sorted by.
        //for ex. by dispatching "0cardsCount"
        // we'll get descendent sorting of the packs by the cards count they contain.
        //In the code below setOrder is responding for the arrow displayed in table
        //but it is also being used to determine the ascending or descending sorting
        //in sortValue we just combine these two values into one we actually need.

        setOrder(order === "desc" ? "asc" : "desc")
        //now the arrow will change it's position
        setOrderBy(property)
        //now the arrow will appear near the row title we'll sort the packs by
        const toggleDesAsc = order === "desc" ? "0" : "1"
        //here we have 0 or 1 for desc or asc
        let sortValue = [toggleDesAsc, property].join('')
        //the property is the field for sorting, we have it from onClick
        console.log(sortValue)
        dispatch(packsActions.setSortByTableRows({sortPacks:sortValue}))
    }

    return (
        <TableContainer component={Paper}>
            {packs && packs.length > 0 && (
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    {/*<TableHead>
                        <TableRow>
                            <TableCell>Name </TableCell>
                            <TableCell align="right">Cards</TableCell>
                            <TableCell align="right">Updated</TableCell>
                            <TableCell align="right">Created by</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>*/}
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {packs.map((pack) => (
                            <TableRow
                                key={pack.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {userId === pack.user_id
                                        ? <EditableSpan value={pack.name}
                                                        onChange={(newValue) => onPackTitleDoubleClickHandler(pack._id, newValue)}/>
                                        : pack.name}
                                </TableCell>
                                <TableCell align="right">{pack.cardsCount}</TableCell>
                                <TableCell align="right">{pack.updated}</TableCell>
                                <TableCell align="right">{pack.user_name}</TableCell>
                                <TableCell align="right">
                                    <PackOptions hasCards={pack.cardsCount > 0} packId={pack._id}
                                                 isAuthor={userId === pack.user_id}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

        </TableContainer>
    );
}
