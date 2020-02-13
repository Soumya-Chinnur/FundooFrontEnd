import axios from "axios";
import { apiConstant } from "../../constants/apiconstants";
export default {
  // import apiConstant from "../constants/apiconstants";
  login(loginData) {
    // eslint-disable-next-line no-console
    console.log("res in servicesData", loginData);

    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.userLogin,
      loginData
    );
  },
  register(registerData) {
    //   eslint-disable-next-line no-console
    console.log("sfgjfxwjux", registerData);
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.userRegistration,
      registerData
    );
  },
  forgotPassword(data) {
    //   eslint-disable-next-line no-console
    console.log("skjhdkwjs", data);
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.userResetPassword,
      data
    );
  },
  aaddlabel(data) {
    console.log("mmmmmmmm", data);
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.addLabel,
      data
    );
  },
  dashboard() {
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
  userService() {
    //   eslint-disable-next-line no-console
    return axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.userService,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  addCollaborator(data) {
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
