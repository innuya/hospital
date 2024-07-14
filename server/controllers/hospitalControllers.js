const Hospital = require('../models/hospitalSchema');

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
module.exports.getHospital = async (req, res) => {
  const Hospital = await Hospital.find(req.body);
  res.status(201).json(Hospital);
};

module.exports.postHospital = (req, res) => {
  //   const Hospital = await Hospital.create({
  //     name: req.body.name,
  //     image: `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`,
  //   });

  res.status(201).json({ message: 'added hospitals' });
};
