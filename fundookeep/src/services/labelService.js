
import { apiConstant } from "../constants/apiconstants";
import axios from "axios";
export default {
getLabelList() {
    return axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.getlabel,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
}