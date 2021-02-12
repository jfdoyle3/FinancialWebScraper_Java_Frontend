import React,{Component} from "react";
import HeaderComponent from "./HeaderComponent.jsx";
import ScraperPageComponent from "./ScraperPageComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import ScraperHistory from "./ScraperHistoryComponent.jsx";

class FinancialWebScraper extends Component {
    render() {
      return (
        <div>
            <HeaderComponent/>
            {/* <ScraperPageComponent/> */}
            <ScraperHistory/>
            <FooterComponent/>
        </div>
    );
  }
}

export default FinancialWebScraper;