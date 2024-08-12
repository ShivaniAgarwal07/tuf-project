import  { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function EditForm({formData, setFormData, handleSubmit}) {
  
  const handleChange = (e) => {
  
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (
    <Box
      sx={{
        mx: 'auto',
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#1A1A1B',
        color: '#ffffff'
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Edit Banner
      </Typography>
      <form onSubmit={handleSubmit}>
      <Box
      sx={{   
        display: 'flex',
        flexDirection: 'row'
      }}
    >
        <TextField
          label="Banner Description"
          InputProps={{
        style: { color: 'white' }, 
      }}
      InputLabelProps={{
        style: { color: 'white' }, 
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', 
          },
          '&:hover fieldset': {
            borderColor: 'red', 
          },
          
        },
      }}
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          
        />
        <TextField
          label="URL"
          type="link"
          variant="outlined"
          fullWidth
          margin="normal"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
          InputProps={{
        style: { color: 'white' },
      }}
          InputLabelProps={{
        style: { color: 'white' }, 
      }}

          sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', 
          },
          '&:hover fieldset': {
            borderColor: 'red', 
          },
          
        },
      }}
        />
        </Box>
        <TextField
          label="timer"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          name="timer"
          value={formData.timer}
          onChange={handleChange}
          required
          InputProps={{
        style: { color: 'white' },
      }}
          InputLabelProps={{
        style: { color: 'white' },
      }}

          sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', 
          },
          '&:hover fieldset': {
            borderColor: 'red', 
          },
          
        },
      }}
          
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, backgroundColor: '#E11C49' }}
        >
          Save Changes
        </Button>
      </form>
    </Box>
  );
}

export default EditForm;