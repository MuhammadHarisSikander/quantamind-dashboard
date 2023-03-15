import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function UserAccessForm() {
    return (
        <Box>
            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>

                <h3 style={style}>
                    User Access Form
                </h3>
            </div>
            <hr />
            <div style={{ padding: '20px', display: 'flex', margin: '20px', justifyContent: 'space-between', flex: '1' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
            </div>

            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
            </div>
            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
            </div>

            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
            </div>

            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    fullWidth
                    style={style}
                />
            </div>
            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>

                <Stack spacing={2} direction="row" style={style}>
                    <Button size="large" variant="outlined">Update Account</Button>
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