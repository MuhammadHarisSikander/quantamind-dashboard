import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function AddDept(props) {
    const [orgName, setOrgName] = useState("");
    const [compName, setCompName] = useState("");
    const abc = false

    const storeDept = () => {
        props.depts.push(compName)

    }
    const closeModal = () => {
        props.closeModal()
    }
    const mainFunc = () => {
        storeDept()
        closeModal()
    }

    return (
        <Box>
            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>

                <h3 style={style}>
                    Department Details
                </h3>
            </div>
            <hr />
            <div style={{ padding: '20px', display: 'flex', margin: '20px', justifyContent: 'space-between', flex: '1' }}>
                {/* <TextField
                    required
                    id="outlined-required"
                    label="Company Name"
                    defaultValue=""
                    fullWidth
                    style={style}
                    placeholder={orgName}
                /> */}
                <TextField
                    required
                    id="outlined-required"
                    label="Department Name"
                    defaultValue=""
                    fullWidth
                    style={style}
                    // placeholder={compName}
                    onChange={(val) => setCompName({ name: val.target.value })}
                />
            </div>
            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
                <Stack spacing={2} direction="row" style={style}>
                    <Button onClick={() => mainFunc()} size="large" variant="outlined">Add Department</Button>
                    {/* <Button onClick={() => depts.depts.push(compName)} size="large" variant="outlined">Add Department</Button> */}
                </Stack>
            </div>



        </Box>
    )
}

const style = {
    margin: '20px',
    marginBottom: '0px',
    marginTop: '0px',
}