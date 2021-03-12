import React, { Component } from "react";
import {Button, Spinner, Pagination, Form, FormControl, NavDropdown} from 'react-bootstrap';
import HistoryDataServices from "../API/HistoryDataServices.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styling/css/HistoryPage.css";



class HistoryPageComponent extends Component {
  constructor(props){
  super(props);
  this.state={
    stockHistory: [],
    value: ''
  };
};

componentDidMount() {
  HistoryDataServices.retrieveHistory().then(
    (response) =>
 //   console.log(response.data));
    this.setState({ stockHistory: response.data }));
};

    render() {
      return(
        <main>
        <div id="search">
         <Form inline>
           <div className="col 100">
           <Form.Control as="select">
           {this.state.stockHistory.map((history) => (
               <option>{history.dateScraped}</option>
           ))};
          </Form.Control>
          </div>
          <div className="col 500">
        <FormControl  className="mr-sm-2" 
                    type="text"
                    name="symbol"
                    value={this.state.value}
                    onChange={this.handleChange} 
                    />
         <input type="submit" value="Submit" />
       </div>
      </Form>
     </div>
        <div className="container">
        <table  id="history" class="table table-condensed table-striped" >
        
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
                <button  onClick={() => this.scrape()}>{history.symbol} History</button>
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

export default HistoryPageComponent;