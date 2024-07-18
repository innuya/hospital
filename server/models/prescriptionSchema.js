const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema({});

const Prescription = mongoose.model('Prescription ', prescriptionSchema);

module.exports = Prescription;
