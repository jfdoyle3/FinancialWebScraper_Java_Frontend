import React, { Component } from "react";
// import {Button} from 'react-bootstrap';
import StockDataServices from "../API/StockDataServices.js";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class ScraperPage extends Component {
  constructor(props){
  super(props);
  this.state={
    stocks: []
  //  loading: true
  };
  this.scrape = this.scrape.bind(this);
}
componentDidMount() {
  StockDataServices.retrieveStocks().then(
    (response) =>
   console.log(response.data));
  //  this.setState({ stocks: response.data,loading: false }));
   //  this.setState({ stocks: response.data }));
}
scrape() {
}
    render() {
      let data;
      if (this.state.loading){
        data=  <div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div >
      } else{
        data=         
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
                <td>{stock.dateScraped}</td>
                <td>{stock.symbol}</td>
                <td>{stock.lastPrice}</td>
                <td>{stock.priceChange}</td>
                <td>{stock.changePercentage}</td>
                <td>{stock.marketTime}</td>
                <td>{stock.volume}</td>
                <td>{stock.avgvol}</td>
                <td>{stock.marketCap}</td>
                <button  onClick={() => this.scrape()}>{stock.symbol} History</button>
              </tr>
               ))}
          </tbody>
        </table>
      </div>
      <div>
        <button  onClick={() => this.scrape()}>Scrape</button>
      </div>

  </main>

      }
      
      return (
          {data}
    );
  }
}

export default ScraperPage;