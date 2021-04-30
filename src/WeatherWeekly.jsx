
import React, {useState, useEffect} from 'react';
import WeatherDay from './WeatherDay.jsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  citiesSection : {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '35px',
    color: '#f7910b',
    fontSize: '20px',
  },
  cities : {
    width: '400px',
    height: '70px',
      "&:hover": {
      backgroundColor: '#ECECEC',
      cursor: 'pointer',
  }
  },
  borderLine : {
    borderRight: '1px solid #ECECEC',
  }
});

// This component consists of the header, search bar, quick city searches and container for 5 day cards.

const WeekContainer = () => {
  
  // Entire data set for next five days
  const [fullData, setFullData] = useState([]);
  // Data for five days at 6pm
  const [dailyData, setDailyData] = useState([]);
  // Hold the state for the zip code to search
  const [zipCode, setZipCode] = useState('');
  const [currentZip, setCurrentZip] = useState('')
  // The city of the zip code
  const [city, setCity] = useState(undefined);
  // Use for the useEffect for the quick search
  const [quickCity, setQuickCity] = useState('');
  
  // Key for open weather api and url for data
  const ApiKey = 'f24086492797537d27e22e610b6a07a3';
  const URL = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&APPID=${ApiKey}`;

  const classes = useStyles();

  // api call 
  const onSubmit = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "200") {
        const dailyData = data.list.filter(response => response.dt_txt.includes("18:00:00"))
        setFullData(data.list)
        setDailyData(dailyData)
        setCity(data.city.name)
        setCurrentZip(zipCode)
        setZipCode("")
      } else {
        setDailyData(undefined)
      }
      setZipCode('')
    })
  };

  // clears the input form after submit
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  // function to trigger quick search city
  const quickSearch = (zip) => {
    setZipCode(zip);
    setQuickCity(zip)
  };

  // rendering the child component - 5 day forecast
  const dayCards = () => {
    return dailyData.map((daily) => <WeatherDay daily={daily} fullData={fullData} key={'index'}/>)
  }

  // useEffect for quick searches listening to the change on quickCity state
  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line 
  }, [quickCity]);
 
    return (
      <div style={{width: '80%', marginTop: '55px', margin: 'auto', textAlign: 'center'}}>
        <div style={{backgroundColor:'#f7910b'}}>
          <h1 style={{color: '#ffffff'}}>Weather Displayer</h1>
        </div>
        <div className={classes.citiesSection}>
          <div className={classes.cities} onClick={() => quickSearch(10016)}><p>New York</p></div>
            <span className={classes.borderLine}></span>
            <div className={classes.cities} onClick={() => quickSearch(33101)}><p>Miami</p></div>
            <span className={classes.borderLine}></span>
            <div className={classes.cities} onClick={() => quickSearch(90001)}><p>Los Angeles</p></div>
            <span className={classes.borderLine}></span>
            <div className={classes.cities} onClick={() => quickSearch(60601)}><p>Chicago</p></div>
            <span className={classes.borderLine}></span>
            <div className={classes.cities} onClick={() => quickSearch(75206)}><p>Dallas</p></div>
          </div>
      <h2 style={{color: '#f7910b'}}>Five Day Forecast</h2>
      <h2 style={{color: '#f7910b'}}>{city ? city : ''}</h2>
      <h2 style={{color: '#f7910b'}}>{currentZip}</h2>
        <div style={{display:'row', justifyContent: 'center'}}>
          <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Zip Code"
            onChange={(event) => setZipCode(event.target.value)}
            style={{fontSize: '20px'}}
          />
          <button style={{backgroundColor:'#f7910b', border: '2px solid #f7910b',  color: '#ffffff', fontSize: '20px', borderRadius: '3px'}} onClick={onSubmit}>Check Weather</button>
            </form>
         {dailyData ? <Grid style={{display:'flex', justifyContent: 'center', padding: '50px'}}>
          {dailyData && dayCards()}
          </Grid> : 
          <h1 style={{color: '#f7910b'}}>ENTER A ZIP CODE!!</h1> 
         }
        </div>
      </div>
    )
  
}

export default WeekContainer;