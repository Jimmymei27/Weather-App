# Weather-App

<p align="center">
<img src="/src/weather.png" width="25%" height="30%">
<br/>
<img src="/src/weather.png">
</p>

# 
<h3 align="center"> Enter a zip code to check the five day forecast</h3>

# 

<p align="center">
  <img src="/src/weatherApp.png" alt="Weather Displayer Demo" style="width: 55%">
</p>

### How To Use 

1. npm i to install dependencies.
2. npm run start to start the front end.
3. visit localhost.

## Features 
- Obtain forecast of cities using zip code.
- Five day forecast displaying current temperature, daily high and low and weather icon.
- Section with cities to allow easy forecast retrieval.

## Tech Stack
- React(Hooks)
-	Material UI
-	OpenWeatherAPI
-	Moment

# Feedback
When designing this weather application I created a container to hold five daily weather forecast card. By using a container it made it responsive and cleaner to have the cards always aligned. I used Material UI for cleaner components. The API did not include daily high and low. So I parse all data for each day to retrieve the highest and lowest temperature of the day.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
