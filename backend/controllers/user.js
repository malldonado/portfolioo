const UserData = require("../models/UserData");

exports.updateUserData = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      instagram,
      linkedin,
      github,
      dribbble,
    } = req.body;

    const existingUser = await UserData.findOne({});

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    existingUser.email = email;
    existingUser.password = password;
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
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createUserData = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      instagram,
      linkedin,
      github,
      dribbble,
    } = req.body;

    const createUser = await UserData.create({
      email,
      password,
      firstName,
      lastName,
      phone,
      instagram,
      linkedin,
      github,
      dribbble,
    });

    if (!createUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(createUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const userData = await UserData.findOne({});

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserData.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
};