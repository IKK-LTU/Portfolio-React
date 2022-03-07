import database from "../database/index.js";
import UserViewModel from "../view-models/user-view-model.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  const { users } = JSON.parse(JSON.stringify(database.data));

  const foundUser = users.find((x) => x.email === email);

  if (!foundUser) {
    // Nerastas Vartotojas
    res.status(404).json({
      message: "Vartotojas su tokiu paštu nerastas",
    });
    return;
  }

  if (foundUser.password === password) {
    res.status(200).json({
      user: new UserViewModel(foundUser),
      token: "Kazkada busiu tikras tokenas",
    });
    return;
  }

  // Neteisingas slaptažodis
  res.status(400).json({
    message: "Neteisingas slaptažodis",
  });
};

export const register = (req, res) => {
  res.status(200).json({ message: "Užaugus būsiu registracija" });
};

export const checkEmail = (req, res) => {
  const { email } = req.query;
  const database = JSON.parse(JSON.stringify(database.data));
  const emailIsTaken = Boolean(database.users.find((x) => x.email === email));
  if (emailIsTaken) {
    res.status(200).json({
      available: false,
      message: "Vartotojas su tokiu paštu jau egzistuoja",
    });
  } else {
    res.status(200).json({
      available: true,
      message: "Vartotojas galimas",
    });
  }
};