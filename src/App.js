import './App.css';
import NavBar from './components/Navbar/NavBar';
import HeroImage from './components/Hero/HeroImage';
import React, {useEffect, useState } from 'react';
import { fetchTopAlbums, fetchSongs } from './api/api';
import Section from './components/Section/Section';
import BasicAccordion from './components/FAQs/Faqs';

function App() {
  const [data, setData] = useState([])
  const [songsData, setSongsData] = useState([])
  const [filteredDataValues, setFilteredDataValues] = useState([])
  // const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState(0)

  
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const generateSongsData = (value) => {
    let key;
    if(value===0){
      filteredData(songsData)
      return;
    }else if(value===1){
      key='rock';
    }else if(value===2){
      key='pop';
    }else if(value===3){
      key='jazz';
    }else if(value===4){
      key='blues';
    }
    const res = songsData.filter(item => item.genre.key===key);
    filteredData(res)
  }

  useEffect(() => {
    generateSongsData(value)
  }, [value])
  
  
  async function generateData() {

    try {
      const data = await fetchTopAlbums();
      setData(data);
    } catch (err) {
      console.err(err);
    }
  }

  const generateAllSongsData = async () => {
    try{
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.error(err)
    }
  }

  const filteredData = (val) => {
    setFilteredDataValues(val)
  }

  useEffect(() => {
    generateData();
    generateAllSongsData();
  },[])

  return (
    <div className="App">
      <NavBar />

      <HeroImage />
    
      <div className='section'>
        <Section data={data} type='album' title='Top Albums' filteredDataValues={data} handleChange={handleChange}/>
        <Section data={data} type='album' title='New Albums' filteredDataValues={data} handleChange={handleChange}/>
        <div className='final-section'>
          <Section data={songsData} className='final-section' type='song' title='Songs' filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleChange={handleChange}/>
        </div>
      </div>
      <div>
        <BasicAccordion />
      </div>
    </div>
  );
}

export default App;
