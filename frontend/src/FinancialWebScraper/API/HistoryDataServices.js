import axios from "axios";
import { API_URL_HISTORY } from "../../Constants.js";

class StockHistoryDataServices {
  retrieveHistory() {
    return axios.get(`${API_URL_HISTORY}/`);
    }


}
export default new StockHistoryDataServices();
