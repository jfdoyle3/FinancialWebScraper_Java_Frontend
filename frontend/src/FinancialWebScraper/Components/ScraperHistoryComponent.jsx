import React, { Component } from "react";
// import {Button} from 'react-bootstrap';
import StockHistoryDataServices from "../API/StockHistoryDataServices.js";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styling/css/ScraperHistory.css";



class ScraperHistory extends Component {
  constructor(props){
  super(props);
  this.state={
    stockHistory: []
 
  };
  this.scrape = this.scrape.bind(this);
}
componentDidMount() {
  StockHistoryDataServices.retrieveHistory().then(
    (response) =>
 //   console.log(response.data));
    this.setState({ stockHistory: response.data }));
}
scrape() {
}
    render() {
      return(
        <main>
        <div>
        <table  class="table table-condensed table-striped" >
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
            {this.state.stockHistory.map((history) => (
              <tr>
                <td>{history.dateScraped}</td>
                <td>{history.symbol}</td>
                <td>{history.lastPrice}</td>
                <td>{history.priceChange}</td>
                <td>{history.changePercentage}</td>
                <td>{history.marketTime}</td>
                <td>{history.volume}</td>
                <td>{history.avgvol}</td>
                <td>{history.marketCap}</td>
              </tr>
               ))}
          </tbody>
        </table>
      </div>
      <div>
      
      </div>

  </main>

       ) }

    }

export default ScraperHistory;