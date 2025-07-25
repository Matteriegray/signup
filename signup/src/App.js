import React,{useState} from 'react';
import {
  Container, TextField, Button, Typography,Checkbox, FormControlLabel, Divider, Box, Link
} from '@mui/material';


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Please login to continue to your account.
        </Typography>
        <TextField
          fullWidth
          label="Email"
          placeholder="Email"
          margin="normal"
        />
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          label="Password"
          placeholder="Password"
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Keep me logged in"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign in
        </Button>
        <Divider sx={{ my: 1, mt: 2 }}>or</Divider>
        <Link href="#" color="primary" underline="none" sx={{ p: 8, mt: 2 }}>
         Sign Up
        </Link>
        <Link href="#" color="primary" underline="none" sx={{ p: 1, mt: 2 }}>
         Register Now
        </Link>

      </Box>
    </Container>
  );
};

export default SignIn;
