import axios from "axios";
import { apiConstant } from "../constants/apiconstants";
export default {
  Ask(data) {
    console.log("skjhdkwjs", data);
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.qandaNotes,
      data,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
    );
  },
  Rating(data) {
    console.log("445554", data);
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant. Ratings,
      data,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
    );
  },
  getNote(noteid) {
    return axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesDetail/" +
        noteid,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  }
};
