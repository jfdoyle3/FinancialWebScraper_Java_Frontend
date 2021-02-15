import axios from "axios";
import { API_URL_STOCKS } from "../../Constants.js";

class StockDataServices {
  retrieveStocks() {
    return axios.get(`${API_URL_STOCKS}/`);
    }


}
export default new StockDataServices();
