import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material'
import Button from '@mui/material/Button'
export default function Login() {
  return (
    <>
    <Typography variant='h3' component='h1' sx={{ textAlign: 'center' }}>
      Autentique-se
    </Typography>
    <Paper sx={{
      width: '512px',
      maxWidth: '90%',
      margin: '25 px 0 auto',
      padding: '12px'
    }}>
     <Typography variant='h5'component="div">
      <form>
          <TextField id="email" 
          className="form-field"
          name = "email"
          label="E-mail" 
          variant="filled" 
          fullWidth
          />
          <TextField id="password" 
          className="form-field"
          name = "password" 
          label="Senha" 
          variant="filled" 
          fullWidth
          />
          <Button variant="contained" type="submit" fullWidth>
            Enviar
          </Button>
      </form>
     </Typography>
    </Paper>
    </>
  )
}