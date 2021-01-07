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
                <th>Date</th>
                <th>Symbol</th>
                <th>Last Price</th>
                <th>Price Change</th>
                <th>Change %</th>
                <th>Market Time</th>
                <th>Volume</th>
                <th>Avg Vol</th>
                <th>Market Cap</th>  
              </tr>
            </thead>
            <tbody>
              {this.state.stocks.map((stock) => (
                <tr>
                  <td>{stock.datestamp}</td>
                  <td>{stock.symbol}</td>
                  <td>{stock.lastPrice}</td>
                  <td>{stock.priceChange}</td>
                  <td>{stock.changePercentage}</td>
                  <td>{stock.marketTime}</td>
                  <td>{stock.volume}</td>
                  <td>{stock.avgvol}</td>
                  <td>{stock.marketCap}</td>
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