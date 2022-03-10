import database from "../database/index.js";
import UserViewModel from "../view-models/user-view-model.js";
import { createToken } from "../helpers/token-helpers.js";


export const updateProfile = (req, res) => {

  const { name, surname, email, password } = req.body;
  
  conaolw.log('--------------------------------------')
  console.log(req);
  conaolw.log('--------------------------------------')
  const foundUser = database.data.users.find((x) => x.email === req.user.email);

  const passwordCorrect = password === foundUser.password;

  if (!passwordCorrect) {
    res.status(403).json({
      message: "Password is incorrect",
      passwordCorrect,
    });
    return;
  }
  let token;
  if (name && name !== foundUser.name) foundUser.name = name;
  if (surname && surname !== foundUser.surname) foundUser.surname = surname;
  if (email && email !== foundUser.email) {
    foundUser.email = email;
    token = createToken({ email, role: foundUser.role });
  }
  database.write();

  const responseJson = {
    message: "Profile updated",
    user: new UserViewModel(foundUser),
    passwordCorrect,
  };
console.log(responseJson);
  if (token) responseJson.token = token;

  res.status(200).json(responseJson);
};
