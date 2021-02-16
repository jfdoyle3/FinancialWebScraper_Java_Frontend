import axios from "axios";
import { API_URL_STOCKS } from "../../constants.js";

class StockDataServices {
  retrieveStocks() {
    return axios.get(`${API_URL_STOCKS}/`);
    }
  scrapeSite(){
    return axios.get(`${API_URL_STOCKS}/scrape`);
  }

}
export default new StockDataServices();
