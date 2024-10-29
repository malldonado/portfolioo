const UserData = require("../models/UserData");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const secretKey = process.env.SECRET_KEY;

// Função auxiliar para hash de senha
const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

// Função auxiliar para enviar resposta com erro
const sendErrorResponse = (res, status, message) => {
  console.error(message);
  return res.status(status).json({ error: message });
};

exports.updateUserData = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone, instagram, linkedin, github, dribbble } = req.body;
    const existingUser = await UserData.findOne({});

    if (!existingUser) {
      return sendErrorResponse(res, 404, "User not found");
    }

    existingUser.email = email;
    existingUser.password = await hashPassword(password);
    existingUser.firstName = firstName;
    existingUser.lastName = lastName;
    existingUser.phone = phone;
    existingUser.instagram = instagram;
    existingUser.linkedin = linkedin;
    existingUser.github = github;
    existingUser.dribbble = dribbble;

    await existingUser.save();
    res.status(200).json(existingUser);
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

exports.createUserData = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone, instagram, linkedin, github, dribbble } = req.body;
    const hashedPassword = await hashPassword(password);

    const newUser = await UserData.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      instagram,
      linkedin,
      github,
      dribbble,
    });

    res.status(201).json(newUser);
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

exports.getUserData = async (req, res) => {
  try {
    const userData = await UserData.findOne({});
    
    if (!userData) {
      return sendErrorResponse(res, 404, "User not found");
    }

    res.status(200).json(userData);
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

exports.authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserData.findOne({ email }); // Buscando diretamente pelo email

    if (!user) {
      return res.status(404).json({ error: "User not found" }); // Retorna o erro desejado
    }

    // Verificando a senha
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Incorrect password" }); // Retorna erro de senha
    }

    // Gerar o token JWT
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '12h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error); // Registra o erro no console
    res.status(500).json({ error: "Internal Server Error" }); // Retorna erro genérico
  }
};
