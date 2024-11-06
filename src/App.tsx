import React from 'react';
import RegistrationForm from './Form/components/RegistrationForm';
import { Container, CssBaseline, Paper } from '@mui/material';


function App() {
  return (
    <>
      <CssBaseline/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, py: 4}}>
      <Paper variant="elevation" sx={{padding: { xs: 2, md: 3 }, backgroundColor: "#fafafa"}}>
        <RegistrationForm/>
      </Paper>
      </Container>
    </>
  );
}

export default App;
