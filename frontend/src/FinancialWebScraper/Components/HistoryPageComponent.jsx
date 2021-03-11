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
 
  this.handleChange = this.handleChange.bind(this);
 // this.handleSubmit=this.handleSubmit(this);}

handleChange(event) {
  console.log(this.state);
  // this.setState({
  //   [event.target.name]: event.target.value,
  // });
}
componentDidMount() {
  HistoryDataServices.retrieveHistory().then(
    (response) =>
 //   console.log(response.data));
    this.setState({ stockHistory: response.data }));
}
// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }
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