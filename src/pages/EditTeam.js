import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
// import { Password } from '@mui/icons-material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function EditTeam() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [editField, setEditField] = useState(true);
    const enableEditField = () => setEditField(false);
    // const modalHandleClose = () => setModalOpen(false);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Box>
            <div style={{ padding: '20px', display: 'flex', margin: '20px', justifyContent: 'space-between' }}>

                <h3 style={style}>
                    Edit Member Details
                </h3>
                <Stack spacing={2} direction="row" style={style}>
                    <Button onClick={enableEditField} color="error" size="small" variant="outlined">Edit</Button>
                </Stack>
            </div>
            <hr />
            <div style={{ padding: '20px', display: 'flex', margin: '20px', justifyContent: 'space-between', flex: '1' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Member Name"
                    // defaultValue="Name"
                    fullWidth
                    style={style}
                    InputProps={{
                        readOnly: editField,
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Designation"
                    // defaultValue="Designation"
                    fullWidth
                    style={style}
                    InputProps={{
                        readOnly: editField,
                    }}
                />
            </div>

            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    // defaultValue="email"
                    fullWidth
                    style={style}
                    InputProps={{
                        readOnly: editField,
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    // defaultValue="password"
                    fullWidth
                    style={style}
                    type="password"
                    InputProps={{
                        readOnly: editField,
                    }}
                />
            </div>



            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
                <FormControl sx={{ m: 2, display: 'flex', flex: 1 }}>
                    <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>


            {/* <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>
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
            </div> */}
            <div style={{ padding: '20px', display: 'flex', margin: '20px' }}>

                <Stack spacing={2} direction="row" style={style}>
                    <Button size="large" variant="outlined">Update Member</Button>
                </Stack>
            </div>



        </Box >
    )
}

const style = {
    margin: '20px',
    marginBottom: '0px',
    marginTop: '0px',
}