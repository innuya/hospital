module.exports.SignupDoctor = async (req, res) => {
  const body = req.body;
  const doctor = await Doctor.findOne({ email: body.email });
  if (doctor) {
    return res.status(403).json({ message: 'Email already exist' });
  }
  const docPassword = genPassword.generate({
    length: 10,
    number: true,
  });
  console.log(docPassword);
  res.status(201).json({ message: 'signed up' });
};
