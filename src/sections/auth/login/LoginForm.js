import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    axios.post("https://first.quantaforms.com/api/login", {
      email: 'admin@admin.com',
      password: 'password'
    }
    )
      .then((response) => {
        console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token)
        navigate('/dashboard', { replace: true });
      })
      .catch(err => {
        console.log(err);
        alert(err)
      })
  };




  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox name="remember" />}
          label="Remember me"
        />

        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
