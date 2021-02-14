import React, { Component } from "react";
import {Button, Spinner, Pagination, Form, FormControl, NavDropdown} from 'react-bootstrap';
import HistoryDataServices from "../API/HistoryDataServices.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styling/css/HistoryPage.css";



class HistoryPageComponent extends Component {
  constructor(props){
  super(props);
  this.state={
    stockHistory: []
 
  };
  this.scrape = this.scrape.bind(this);
}
componentDidMount() {
  HistoryDataServices.retrieveHistory().then(
    (response) =>
 //   console.log(response.data));
    this.setState({ stockHistory: response.data }));
}
scrape() {
}
    render() {
      return(
        <main>
        
         <Form inline>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
       
      </Form>
     
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
              </tr>
               ))}
          </tbody>
        </table>
      </div>
      <div>
      
      </div>
      <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
  </main>

       ) }

    }

export default HistoryPageComponent;