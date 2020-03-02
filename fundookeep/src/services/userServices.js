import axios from "axios";
import { apiConstant } from "../constants/apiconstants";
// import apiConstant from "../constants/apiconstants";
export default {
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
  dashboard() {
    return axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.getNotes,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
  },
  productCart(data) {
    console.log(data, "iiiiiiiiiiiiiiiiiiiiiiiiii");
    return axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api" +
        apiConstant.productCartId,
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
  }
};
