const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema({
  Note: {
    type: String,
    required: true,
    trim: true,
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  Doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  Date: {
    type: Date,
    required: true,
    trim: true,
  },
});

const Prescription = mongoose.model('Prescription ', prescriptionSchema);

module.exports = Prescription;
