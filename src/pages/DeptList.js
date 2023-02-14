import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {
    Modal,
} from '@mui/material';
import AddDept from './AddDept';

const dept = [{ name: 'Finance' }, { name: 'Human resource' }, { name: 'Front-end' }]

export default function DeptList() {
    const [modalOpen, setModalOpen] = useState(false);
    const modalHandleOpen = () => setModalOpen(true);
    const modalHandleClose = () => setModalOpen(false);
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={modalHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddDept depts={dept} closeModal={modalOpen} />
                </Box>
            </Modal>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <h2>
                        Departments
                    </h2>
                    <Button onClick={modalHandleOpen} >
                        Add Department
                    </Button>
                </div>

                <Box
                    sx={{
                        p: 2,
                        // bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr 1fr' },
                        gap: 10,
                        // height: 100

                    }}
                >
                    {
                        dept.map((val, key) => {
                            return <Paper key={key} style={{ backgroundColor: 'green', color: 'white', display: 'flex', }} elevation={24}><Button onClick={() => { window.location = '/dashboard/user/' }} style={{ color: 'white', flex: 1 }}>{val.name}</Button></Paper>
                        })
                    }

                </Box>

            </div>
        </>
    )
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    // p: 11,
};