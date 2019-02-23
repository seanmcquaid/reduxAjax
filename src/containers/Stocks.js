import React, {Component} from "react";
import {connect} from "react-redux";

class Stocks extends Component {
    render(){
        console.log(this.props.stockData)
        let stockSymbol = "";
        let stockDate = "";
        let stockStatus = "";
        let openPrice = 0;
        let closePrice = 0;

        if(this.props.stockData !== null){
            stockSymbol = this.props.stockData.quote.symbol;
            stockDate = this.props.stockData.quote.latestTime;
            stockStatus = this.props.stockData.quote.calculationPrice;
            openPrice = this.props.stockData.quote.open;
            closePrice = this.props.stockData.quote.close;
        }
        return(
            <div className="stock-container">
                <h1>Stocks</h1>
                <div className="stock-info">
                    <h4 className="stock-name">Stock Symbol : {stockSymbol}</h4>
                    <ul className="stock-info-list">
                        <li>Reference Data : {stockDate}</li>
                        <li>Open or Closed : {stockStatus}</li>
                       <li>Open Price : {openPrice}</li>
                       <li>Close Price : {closePrice}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        stockData : state.stocks
    }
}

// export default Stocks;

export default connect(mapStateToProps)(Stocks)