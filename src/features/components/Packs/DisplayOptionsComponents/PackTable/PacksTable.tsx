/*
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {visuallyHidden} from '@mui/utils';
import {useAppSelector} from "common/hooks";


interface Data {
    name: string;
    cardsCount: number;
    updated: string;
    user_name: string;
    actions: number;
}

function createData(
    name: string,
    cardsCount: number,
    updated: string,
    user_name: string,
    actions: number,
): Data {
    return {
        name,
        cardsCount,
        updated,
        user_name,
        actions,
    };
}

const rows = [
    createData('Cupcake', 305, "lalala", "lalala", 4.3),
    createData('Donut', 452, "lalala", "lalala", 4.9),
    createData('Eclair', 262, "lalala", "lalala", 6.0),
    createData('Frozen yoghurt', 233, "lalala", "lalala", 4.0),
    createData('Gingerbread', 356, "lalala", "lalala", 3.9),
    createData('Honeycomb', 408, "lalala", "lalala", 6.5),
    createData('Ice cream sandwich', 237, "lalala", "lalala", 4.3),
    createData('Jelly Bean', 375, "lalala", "lalala", 0.0),
    createData('KitKat', 518, "lalala", "lalala", 7.0),
    createData('Lollipop', 392, "lalala", "lalala", 0.0),
    createData('Marshmallow', 318, "lalala", "lalala", 2.0),
    createData('Nougat', 360, "lalala", "lalala", 37.0),
    createData('Oreo', 437, "lalala", "lalala", 4.0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
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
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
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
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export function PacksTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('updated');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const packs = useAppSelector(state => state.packs.packState !== null ? state.packs.packState.cardPacks : "no packs found")

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        /!*if (event.target.checked) {
            if (typeof packs !== "string") {
                const newSelected = packs.map((n) => n.name);
            }
            setSelected(newSelected);
            return;
        }
        setSelected([]);*!/
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - packs.length) : 0;

    // @ts-ignore
    const visibleRows = React.useMemo(
        () =>
            stableSort(packs, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{width: '100%'}}>
            <Paper sx={{width: '100%', mb: 2}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={packs.length}
                        />
                        <TableBody>
                            {visibleRows.map((packs, index) => {
                                const isItemSelected = isSelected(packs.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, packs.name)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={packs.name}
                                        selected={isItemSelected}
                                        sx={{cursor: 'pointer'}}
                                    >


                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {packs.name}
                                        </TableCell>
                                        <TableCell align="right">{packs.cardsCount}</TableCell>
                                        <TableCell align="right">{packs.updated}</TableCell>
                                        <TableCell align="right">{packs.user_name}</TableCell>
                                        <TableCell align="right">{packs.actions}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={packs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
            />
        </Box>
    );
}
*/

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "common/hooks";
import {packsThunks} from "features/packs/packs.slice";



function createData(
    name: string,
    cardsCount: number,
    updated: string,
    userName: string,
    actions: number,
) {
    return { name, cardsCount, updated, userName,  actions };
}

const rows = [
    createData('Frozen yoghurt', 159, "6.0", "24", 4.0),
    createData('Ice cream sandwich', 237, "9.0", "37", 4.3),
    createData('Eclair', 262, "16.0", "24", 6.0),
    createData('Cupcake', 305, "3.7", "67", 4.3),
    createData('Gingerbread', 356, "16.0", "49", 3.9),
];



export  function PacksTable() {
    const packs = useAppSelector(state => state.packs.packs)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name (100g serving)</TableCell>
                        <TableCell align="right">Cards</TableCell>
                        <TableCell align="right">Created by</TableCell>
                        <TableCell align="right">Updated</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {packs && packs.map((pack) => (
                        <TableRow
                            key={pack.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {pack.name}
                            </TableCell>
                            <TableCell align="right">{pack.cardsCount}</TableCell>
                            <TableCell align="right">{pack.updated}</TableCell>
                            <TableCell align="right">{pack.user_name}</TableCell>
                            <TableCell align="right">{pack.actions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
