import React,{Component} from "react";
import "../Styling/css/Footer.css";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <p id="FooterText" className="text-muted">
          Typed by the fingers of Jim Doyle
        </p>
      </footer>
    );
  }
}

export default FooterComponent;
