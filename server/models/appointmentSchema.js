const mongoose = require('mongoose');
const Doctor = require('./doctorSchema');
const Slot = require('./slotSchema');

const appointmentSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  Doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  Slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;