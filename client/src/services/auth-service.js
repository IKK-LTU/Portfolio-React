import axios from "axios";
import store from "../store/index";
import * as authSlice from "../store/auth";

const requester = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
const login = async ({ email, password }, redirectTo) => {
  const { data, status } = await requester.post("/login", { email, password });
  if (status === 200) {
    const { user, token } = data;
    const reduxAction = authSlice.login({ user, token, redirectTo });
    store.dispatch(reduxAction);
    return true;
  }

  throw new Error(data.message);
};

// const fakeFetch = ({ email, password }) =>
//   new Promise((success, failure) => {
//     setTimeout(() => {
//       if (email === "admin@gmail.com" && password === "Vilnius123") {
//         success({
//           token: "isdfvblska;dfgb;sdfh",
//           user: {
//             id: "5165",
//             role: "admin",
//             email: "admin@gmail.com",
//           },
//         });
//       } else {
//         failure(new Error("Incorect email or/and password"));
//       }
//     }, 2000);
//   });

// const login = async ({ email, password }) => {
//   const response = await fakeFetch({ email, password });
//   return response;
// };

// const checkEmail = (email) =>
//   new Promise((success) => {
//     const existingEmails = ["admin@gmail.com", "user1@gmail.com"];
//     setTimeout(() => {
//       const emailAvailable = !existingEmails.includes(email);
//       success(emailAvailable);
//     }, 1000);
//   });

// const register = () =>
//   new Promise((success) => {
//     setTimeout(() => {
//       success(true);
//     }, 2000);
//   });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  // checkEmail,
  // register,
};
