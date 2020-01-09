import axios from 'axios'
import apiConstant from '../constants/apiconstants'
export function login(loginData) {
    console.log("res in servicesData", loginData)
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.userLogin, loginData)
    }
    export function register(registerData) {
        return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.signUp, registerData)
        }