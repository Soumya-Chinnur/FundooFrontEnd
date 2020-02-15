
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
  addLabel(data) {
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.addLabel,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
 
}