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
    console.log("gjhkjhk", data);

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
  trash(data) {
    console.log("ffsa", data);

    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.trash,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  color(data) {
    console.log("ffsa", data);

    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.color,
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
  },
  updateNotes() {
    return axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.update,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  }
};
