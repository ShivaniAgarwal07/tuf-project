import { useState } from 'react';
import { Switch } from '@mui/material';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditForm from '../EditForm';


export default function Dashboard({formData, handleSubmit, setFormData}) {
  const {description, link} = formData;
    const [checked, setChecked] = useState(true);
    

  const handleChange = (event) => {
    console.log(event.target.checked)

    setChecked(event.target.checked);
    if( !event.target.checked) {
      setFormData(prevFormData => ({ ...prevFormData, timer: 0 }))
      return
    }
    
    setFormData(prevFormData => ({ ...prevFormData, timer: 20 }))
  };
  
  return (
    <Card sx={{ maxWidth: '100%', backgroundColor:'#2C2C2D', height: 450, marginTop: '0.1rem', display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent: 'center'}}>
      <CardContent>
        <Typography fontWeight={700} gutterBottom variant="h3" component="div" sx={{fontFamily: 'DM Sans', color:'#E0E0E0'}}>
        Dashboard
        </Typography>
      </CardContent>
      <Switch
      checked={checked}
      onChange={handleChange}
      
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#ff4081', // Color when the switch is checked
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#ff4081', // Background color when checked
        },
        '& .MuiSwitch-switchBase': {
          color: '#1976d2', // Color when the switch is unchecked
        },
        '& .MuiSwitch-switchBase + .MuiSwitch-track': {
          backgroundColor: '#bdbdbd', // Background color when unchecked
        },
      }}
    />

    <EditForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </Card>
  );
}

