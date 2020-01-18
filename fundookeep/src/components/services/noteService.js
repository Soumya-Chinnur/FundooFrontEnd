import { Subject } from "rxjs";
import { apiConstant } from "../constants/apiconstants";
import axios from "axios";

const subject = new Subject();

export const messageService = {
  sendMessage: message => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  getMessage: () => subject.asObservable()
};
export default {
  archive(data) {
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.archive,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  getNotes() {
    return axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.dashboard,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  }
};
