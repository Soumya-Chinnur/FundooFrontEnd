import { Subject } from "rxjs";
import { apiConstant } from "../constants/apiconstants";
import axios from "axios";

const subject = new Subject();

export const messageService = {
  sendMessage: message => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  getMessage: () => subject.asObservable()
};
const newSubject = new Subject();

export const textService = {
  sendMessage: message => newSubject.next({ text: message }),
  clearMessages: () => newSubject.next(),
  getMessage: () => newSubject.asObservable()
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
  trash(data) {
    console.log("kkkkkkkkkkkk", data);
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
  profilePic(data) {
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.profilePic,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  deleteforever(data) {
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.deleteForever,
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
  addNote(data) {
    //   eslint-disable-next-line no-console
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.addNote,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  updateNote(data) {
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.updateNote,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },

  reminder(data) {
    console.log("weeeeeeeeeeeeeeeee", data);

    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.reminder,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  collaborator() {
    return axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.getUser,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },

  addCollaborator(data, id) {
    console.log(id);

    //   eslint-disable-next-line no-console
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.addCollaborator,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  removeReminder(data) {
    //   eslint-disable-next-line no-console
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.removeReminder,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  }
};
