const Hospital = require('../models/hospitalSchema');

module.exports.getHospital = (req, res) => {
  res.status(200).json({ message: 'Hospitals added' });
};

module.exports.getHospitalById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: 'GET /hospital/:id' });
};

module.exports.postHospital = (req, res) => {
  res.status(201).json({ message: 'POST /hospital' });
};
