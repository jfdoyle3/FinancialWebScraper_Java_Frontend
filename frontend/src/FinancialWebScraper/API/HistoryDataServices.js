import axios from "axios";
import { API_URL_HISTORY } from "../../constants.js";

class StockHistoryDataServices {
  retrieveHistory() {
    return axios.get(`${API_URL_HISTORY}/`);
    }
  findBySymbol(symbol){
    return axios.get(`${API_URL_HISTORY}/symbol/${symbol}`);
  }

}
export default new StockHistoryDataServices();
