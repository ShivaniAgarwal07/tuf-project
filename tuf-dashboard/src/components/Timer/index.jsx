import {  useEffect} from "react"
import Typography from '@mui/material/Typography';


const Timer = ({timer, setFormData}) => {
    useEffect(() => {
        if (timer === 0) return;
        const timerId = setInterval(() => {
          setFormData(prevFormData => ({
            ...prevFormData,
            timer: prevFormData.timer - 1
          }));
        }, 1000);
    
        return () => clearInterval(timerId);
      }, [timer, setFormData]);

  return (
    <div>
    {timer > 0 ? (
    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'DM Sans', color:'#E0E0E0'}}> 
    <Typography variant="h5" component="span" sx={{fontFamily: 'DM Sans', color:'#E11C49'}}>{ timer}</Typography> seconds remaining!</Typography>
  ) : (
    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'DM Sans', color:'#E0E0E0'}}>Banner is Closed!</Typography>
  )}
    
</div>
  )
}

export default Timer