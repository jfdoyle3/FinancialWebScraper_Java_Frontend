import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import StockDataServices from "../API/StockDataServices.js";

class ScraperPage extends Component {
  constructor(props){
  super(props);
  this.state={
    stocks: [],
  };
}
   componentDidMount() {
    
  StockDataServices.retrieveStocks().then(
    (response) =>
    this.setState({ stocks: response.data }));
    
   //   console.log(response));
      // this.setState({
      //    line: response.data.message,
     // })
 //  );
}
    render() {
      return (
        <main>
        <div className="container">
          <table id="topfive" className="table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Last Price</th>
                <th>Avg Vol</th>
                <th>Change %</th>
                <th>Market Cap</th>
                <th>Market Time</th>
                <th>Price Change</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              {this.state.stocks.map((stock) => (
                <tr>
                  <td>{stock.symbol}</td>
                  <td>{stock.lastPrice}</td>
                  <td>{stock.avgvol}</td>
                  <td>{stock.changePercentage}</td>
                  <td>{stock.marketCap}</td>
                  <td>{stock.marketTime}</td>
                  <td>{stock.priceChange}</td>
                  <td>{stock.volume}</td>
                </tr>
                 ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default ScraperPage;



// Stock layout:
// symbol: this.symbol,
// lastPrice: this.lastPrice,
// avgvol: "45.677M"
// changePercentage: "-0.63%"
// marketCap: "110.425B"
// marketTime: "4:00PM EST"
// priceChange: "-0.58"
// volume: "24.931M"