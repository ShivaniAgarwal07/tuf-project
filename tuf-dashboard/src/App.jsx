
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
    

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';


function App() {
  const [formData, setFormData] = useState({
    description: '',
    link: '',
    timer: ''
  })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('before fetch')
    const fetchBanner = async () => {
      try {
        
        const response = await fetch("http://localhost:3001/banner");
        
        if (!response.ok) {
          throw new Error("Failed to fetch banner details");
        }
        const data = await response.json();
        setFormData(data);
        
        setLoading(false);
      } catch (err) {
        
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/banner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update banner details");
      }

      const result = await response.json();
      alert(result.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <Navbar/>
    {loading ? <Typography component={"span"} variant="h3" sx={{textAlign: 'center'}}>Loading ..... </Typography> : <Banner formData={formData}  setFormData={setFormData}/>}
    <Dashboard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />

    </>
  )
}

export default App
