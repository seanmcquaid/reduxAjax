import React, {Component} from "react";
import {connect} from "react-redux";
// weather needs to know about Redux
// the reason for this is because the weather state is going to be updated by the searchbar
// and the searchbar is a peer, not a parent
class Weather extends Component {
    render(){
        // console.log(this.props.weatherData)
        let cityName = "";
        let description = "";
        let averageTemp = "";
        let maxTemp = "";
        let minTemp = "";

        if(this.props.weatherData !== null){
            cityName = this.props.weatherData.name;
            description = this.props.weatherData.weather[0].main
            averageTemp = this.props.weatherData.main.temp
            maxTemp = this.props.weatherData.main.temp_max;
            minTemp = this.props.weatherData.main.temp_min;

        }
        return(
            <div className="weather-container">
                <h1>Weather</h1>
                <div className="weather-info">
                    <h4 className="city-name">City Name : {cityName}</h4>
                    <ul className="weather-info-list">
                        <li>Description : {description}</li>
                        <li>Average Temperature : {averageTemp}</li>
                        <li>Maximum Temperature : {maxTemp}</li>
                        <li>Minimum Temperature : {minTemp}</li>
                    </ul>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    // console.log(state)
    return{
        weatherData : state.weather
    }
}

// connect takes a max of two args
// 1. the map/state function
// 2. the map/dispatch action function


// export default Weather;

export default connect(mapStateToProps)(Weather);

// inside redux
// function connect(cb1,cb2){
    // cb1(theStore)
    // cb2(dispatch)
// }