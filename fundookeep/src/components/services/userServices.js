import axios from "axios";
import { apiConstant } from "../constants/apiconstants";
// import apiConstant from "../constants/apiconstants";
export function login(loginData) {
  // eslint-disable-next-line no-console
  console.log("res in servicesData", loginData);

  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.userLogin,
    loginData
  );
}
export function register(registerData) {
  //   eslint-disable-next-line no-console
  console.log("sfgjfxwjux", registerData);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api" +
      apiConstant.userRegistration,
    registerData
  );
}
export function forgotPassword(data) {
  //   eslint-disable-next-line no-console
  console.log("skjhdkwjs", data);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api" +
      apiConstant.userResetPassword,
    data
  );
}
export function dashboard() {
  
  return axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.dashboard,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  );
}
export function addNote(data) {
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
}
export function updateNote(data) {
  
  
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.updateNote,
    data,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  );
}
export function userService() {
  //   eslint-disable-next-line no-console
  return axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.userService,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  );
}


