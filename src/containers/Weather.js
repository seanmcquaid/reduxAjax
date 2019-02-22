import React, {Component} from "react";
import {connect} from "react-redux";
// weather needs to know about Redux
// the reason for this is because the weather state is going to be updated by the searchbar
// and the searchbar is a peer, not a parent
class Weather extends Component {
    render(){
        console.log(this.props)
        return(
            <h1>Weather</h1>
        )
    }
}


function mapStateToProps(state){
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