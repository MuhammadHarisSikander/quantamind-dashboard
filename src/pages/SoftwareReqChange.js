import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {
    Modal,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddDept from './AddDept';

export default function SoftwareReqChange() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [departments, setDepartments] = useState([]);
    const modalHandleOpen = () => setModalOpen(true);
    const modalHandleClose = () => setModalOpen(false);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://first.quantaforms.com/api/department', {
                headers: {
                    Authorization: 'Bearer 24|2xdaKmC6QnqhIqHL4k2RKzP3haotfgYzeTFx6efi'
                }
            });
            setDepartments(response.data.data);
            console.log('Response', response.data.data);
        };

        getData();
    }, []);
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={modalHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddDept closeModal={modalHandleClose} />
                    {/* <AddDept depts={dept} closeModal={modalHandleClose} /> */}
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
                        departments.map(dept => {
                            return (
                                <Paper
                                    key={dept.id}
                                    style={{
                                        backgroundColor: 'green',
                                        color: 'white',
                                        display: 'flex',
                                    }}
                                    elevation={24}>
                                    <Button
                                        onClick={() => navigate(`/dashboard/user${dept.id}`)}
                                        style={{
                                            color: 'white',
                                            flex: 1
                                        }}>
                                        {dept.name}
                                    </Button>
                                </Paper>
                            )
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