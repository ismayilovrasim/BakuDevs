import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ReseptMenu from '../ReseptMenu';
import { useState } from 'react';


function createData(
    id: String,
    date: string,
    amount: string,
) {
    return { id, date, amount };
}

const rows = [
    createData('000000001', "12.02.2022", '10 AZN'),
    createData('000000002', "12.02.2022", '10 AZN'),
    createData('000000003', "12.02.2022", '10 AZN'),
    createData('000000004', "12.02.2022", '10 AZN'),
];



const Resept = ({ }) => {
    const [rowData, setRowData] = useState<any>({})


    return (
        <>
            {
                rowData.id && <ReseptMenu row={rowData} setRow={setRowData} />
            }
            <TableContainer sx={{ marginLeft: '20px', marginTop: '50px', maxWidth: 650, borderRadius: 'inherit' }} component={Paper}>
                <Table sx={{ borderRadius: '20px' }}>
                    <TableHead>
                        <TableRow sx={{
                            bgcolor: '#ECF8F9',
                            border: '1px solid #CAE6E8',
                            '& th': {
                                color: 'primary.main',
                                fontWeight: 700
                            }
                        }}>
                            <TableCell>Qəbz ID</TableCell>
                            <TableCell>Abunə tarixi</TableCell>
                            <TableCell>Məbləğ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={+row.id}
                                onClick={() => setRowData(row)}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '& th': { textAlign: 'center', fontWeight: 500 }
                                }}
                            >
                                <TableCell sx={{ position: 'relative', paddingLeft: 4 }} >{<NewspaperIcon sx={{ position: 'absolute', top: 18, left: 13, fontSize: 16 }} />}{row.id} </TableCell>
                                <TableCell >{row.date}</TableCell>
                                <TableCell >{row.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    )
}
export default Resept
