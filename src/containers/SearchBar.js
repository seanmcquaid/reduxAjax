import React, {Component} from "react";

// searchbar needs to know about redux
// it doesnt care about the data/doesnt need state 
// but it needs the dispatcher because the searchbar changes state
// it needs to fire a function that the dispatcher will send to update the weather reducer

import {connect} from "react-redux";
// because we need the dispatcher, we need bindActionCreators
import {bindActionCreators} from "redux";
import fetchWeather from "../actions/fetchWeather";

class SearchBar extends Component {
    handleWeather = (event)=>{
      event.preventDefault();
      const zipCode = document.getElementById("weather-input").value;
      this.props.fetchWeather(zipCode);
    }
    render(){
        return(
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="/">Page 1</a></li>
                  <li><a href="/">Page 2</a></li>
                </ul>
                <form onSubmit={this.handleWeather} className="navbar-form navbar-left" action="/action_page.php">
                  <div className="form-group">
                    <input id="weather-input" type="text" className="form-control" placeholder="Search for weather" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <form onSubmit={this.handleStocks} className="navbar-form navbar-left" action="/action_page.php">
                  <div className="form-group">
                    <input id="stock-input" type="text" className="form-control" placeholder="Search for stock" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </div>
            </nav>
        )
    }
}
// to LOCAL props
// binds fetchWeather to the dispatcher
function mapDispatchToProps(dispatcher){
  return bindActionCreators({
    fetchWeather: fetchWeather
  },dispatcher)
}

// normally would hand mapStatetoProps so you pass null
export default connect(null,mapDispatchToProps)(SearchBar);

// export default SearchBar;