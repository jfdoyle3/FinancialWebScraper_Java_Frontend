import axios from "axios";
import { API_URL } from "../../Constants.js";

class StockHistoryDataServices {
  retrieveHistory() {
    return axios.get(`${API_URL}/history`);
    }


}
export default new StockHistoryDataServices();
