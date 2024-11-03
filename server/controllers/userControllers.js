const User = require('../db/models/userSchema');

const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signupDoctor = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(403).json({ message: 'Email already taken' });
  }
  //const hashedPassword = await bcrypt.hash(docPassword, 2);

  module.exports.loginDoctor = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(403).json({ message: 'Email is incorrect' });
    }

    const isMatching = await bcrypt.compare(req.body.password, user.password);
    if (!isMatching) {
      return res.status(403).json({ message: 'Incorrect Password' });
    }

    const token = jwt.sign({ id: user._id, role: 'user' }, process.env.KEY, {
      expiresIn: '365d',
    });

    res.status(200).json({ message: 'You Are Logged In', token, id: user._id });
  };

  module.exports.forgotPassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(403).json({ message: 'Incorrect Email' });
    }
    const resetToken = jwt.sign(
      { email: req.body.email },
      process.env.FORGOT_PASSWORD_KEY,
      { expiresIn: '2d' }
    );

    let transporter = nodemailer.createTransport({
      service: process.env.NODEMAILER_S,
      auth: {
        user: process.env.NODEMAILER_U,
        pass: process.env.NODEMAILER_P,
      },
    });

    let mailOptions = {
      from: process.env.NODEMAILER_U,
      to: req.body.email,
      subject: 'PASSWORD RESET EMAIL',
      text: `Please Reset Your Password using the link:-
     http://localhost:${process.env.PORT}/user/reset-password/${resetToken}`,
    };

    transporter.sendMail(mailOptions, err => {
      if (err) {
        return res.status(404).json({ message: 'error in mail sending' });
      } else return res.status(200).json({ message: 'Mail Send' });
    });
  };

  module.exports.resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
      const isValid = jwt.verify(token, process.env.FORGOT_PASSWORD_KEY);
      const hashedPassword = await bcrypt.hash(password, 2);

      const user = await User.findOneAndUpdate(
        { email: isValid.email },
        { password: hashedPassword }
      );
      return res.status(200).json(doctor);
    } catch (e) {
      return res.status(403).json({ message: 'Invalid Token' });
    }
  };

  module.exports.getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  };
};
