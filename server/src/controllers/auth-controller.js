import database from "../database/index.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  const { users } = database.data;

  const foundUser = users.find((x) => x.email === email);
  if (!foundUser) {
    // Nerastas Vartotojas
    res.status(404).json({
    
      message: "Vartotojas su tokiu paštu nerastas",
    });
    return;
  }

  if (foundUser.password === password) {
    delete foundUser.password;
    // Viskas gerai
    res.status(200).json({
      user: foundUser,
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
  const { email, name, surname, password, repeatPassword } = req.body;
  if (password !== password) {
    res.status(400).json({
      message: "Slaptažodžiai nesutampa",
    });
    return;
  }

  /*
    įrašymo pvz.
  */
  database.data.users.push({ name: "Klemensas" });
  database.write();

  res.status(200).json({ message: "Užaugus būsiu registracija" });
};

export const checkEmail = (req, res) => {
  res.status(200).json({ message: "Užaugęs būsiu pašto patikrinimas" });
};

export const showProjects = (req, res) => {
  const { projects } = database.data;
  res.status(200).json({projects});
};