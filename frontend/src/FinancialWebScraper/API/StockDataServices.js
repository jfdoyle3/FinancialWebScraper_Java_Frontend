import axios from "axios";
import { API_URL } from "../../Constants.js";

class StockDataServices {
  retrieveStocks() {
    return axios.get(`${API_URL}/testing-bean`);
    }


}
export default new StockDataServices();
