import React,{Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent.jsx";
import ScraperPageComponent from "./ScraperPageComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import HistoryPageComponent from "./HistoryPageComponent.jsx";
import HomePageComponent from "./HomePageComponent.jsx";

class FinancialWebScraper extends Component {
    render() {
      return (
        <div className="FinancialWebScraper">
          <Router>
          <HeaderComponent />
            <Switch>
            <Route path="/" exact component={HomePageComponent} />
            <Route path="/home" exact component={HomePageComponent} />
            <Route path="/scraper" exact component={ScraperPageComponent} />
            <Route path="/history" exact component={HistoryPageComponent} />
            </Switch>
            <FooterComponent />
          </Router>
        </div>
    );
  }
}

export default FinancialWebScraper;