
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SubBanner from '../SubBanner';
import Timer from '../Timer' 


export default function Banner({formData, setFormData}) {
  const {description, link} = formData;
  
  return (
    
    <Card sx={{ maxWidth: '100%', height: 450, backgroundColor:'#2C2C2D',margin: 'auto', display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent: 'center'}}>
      {/* <CardMedia
        sx={{ height: 140 }}
        // image="https://avatars.githubusercontent.com/u/74231991?v=4"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography fontWeight={700} gutterBottom variant="h3" component="div" sx={{fontFamily: 'DM Sans', color:'#E0E0E0'}}>
        Gear Up for <Typography variant="h3" component="span" sx={{fontFamily: 'DM Sans', color:'#E11C49'}}>Success:</Typography> Your Ultimate Preparation Hub!
        </Typography>
        <Typography fontWeight={400} variant="body2" color="text.secondary" sx={{margin: 'auto', textAlign: 'center', color:'#E0E0E0'}}>
        Navigate Your Learning Adventure: Explore DSA, Master CS Concepts, Design Systems, Hone Competitive Skills, and Ace Interviews Effortlessly
        </Typography>
      </CardContent>
      <Timer timer={formData.timer} setFormData={setFormData}/>
      {formData.timer ? <SubBanner description= {description} link={link}/> : <></> }
      
    </Card>
  );
}

