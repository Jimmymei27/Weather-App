import React from 'react';
import Card from '@material-ui/core/Card'
const moment = require('moment');

const dailyCardStyle = {
  flexGrow: 1, 
  backgroundColor: '#fafafa',
};

// Component is used to render each daily forecast
const DayCard = ({ daily, fullData }) => {

  // finding the date and time
  let newDate = new Date();
  const weekday = daily.dt * 1000
  newDate.setTime(weekday)

  // parsing data to get Temperature, daily high and low
  const dailyData = fullData.filter(x => x.dt_txt.includes(daily.dt_txt.slice(0, 10)));
  const dailyTemp = dailyData.map(x => x.main.temp).reduce((a,c) => a + c)/dailyData.length;
  const dailyAvgHigh = dailyData.map(x => x.main.temp_max)
  const dailyAvgLow = dailyData.map(x => x.main.temp_min)

  return (
      <Card style={dailyCardStyle}>
        <h2>{moment(newDate).format('MMMM Do, YYYY')}</h2>
        <h3>{moment(newDate).format('dddd').toUpperCase()}</h3>
        <img 
        alt="Weather Icon"
        src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
        />
        <h4 style={{color: '#f7910b'}}>{daily.weather[0].description.toUpperCase()}</h4>
        <h2 style={{color: '#f7910b'}}>{Math.round(dailyTemp) + "°F"}</h2>
        <div style={{display:'flex', justifyContent: 'space-evenly'}}>
          <p>HIGH: {Math.max(...dailyAvgHigh).toFixed(2)}°F</p>
          <p>LOW: {Math.min(...dailyAvgLow).toFixed(2)}°F</p>
        </div>
      </Card>
  )
}

export default DayCard;