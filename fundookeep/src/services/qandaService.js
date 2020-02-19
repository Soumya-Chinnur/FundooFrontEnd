import axios from "axios";
import { apiConstant } from "../constants/apiconstants";
export default {
  Ask(data) {
    return axios.patch(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.qandaNotes,data
    );
  }
};
