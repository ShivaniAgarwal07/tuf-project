import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';

export default function SubBanner({description, link}) {
  return (
    <Box
        height={200}
        width={1000}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center" 
        gap={4}
        p={2}
        sx={{
          border: '2px solid #E11C49',
          borderRadius: 2,   
          boxShadow: 3,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 6,
          },
          backgroundColor: '#f9f9f9', 
        }}
      >
        <Button component="span" sx={{color:'#E11C49'}} >
        {description}
      </Button>
      <IconButton sx={{color: '#E11C49'}} aria-label="Open in new tab" component="a" href={link}>
        <OpenInNew />
      </IconButton>
      </Box>
  );
}
