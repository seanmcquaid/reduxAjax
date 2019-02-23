import axios from "axios";


function fetchStock(stock){
    const stockUrl = `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote`;
    const stockData = axios.get(stockUrl)
    // console.log(stockData)
    return {
        type : "GET_STOCKS",
        payload : stockData
    }
}

export default fetchStock;