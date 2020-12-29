import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import StockDataServices from "../API/StockDataServices.js";

class ScraperPage extends Component {
  constructor(props){
  super(props);
  this.state={
    line: this.props.line
  };
}
   componentDidMount() {
    
  StockDataServices.retrieveStocks().then(
    (response) =>
  //    console.log(response));
      this.setState({
         line: response.data.message,
  
     })
   );
}
    render() {
      return (
        <main>
        <div className="container">
          <table id="topfive" className="table">
            <thead>
              <tr>
                <th></th>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <img/>
                  </td>
                  <td>{this.state.line}</td>
                  <td>item 2</td>
                  <td>item 3</td>
                  <td>
                    <button
                      className="waves-effect waves-light btn-small">
                      View
                    </button>
                  </td>
                  <td>
                    <button>refresh</button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default ScraperPage;