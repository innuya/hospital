const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
  Date: {
    type: Date,
    required: true,
    trim: true,
  },
  from: {
    type: String,
    required: true,
    trim: true,
  },
  To: {
    type: String,
    required: true,
    trim: true,
  },
  AvailableSlots: {
    type: String,
    required: true,
    trim: true,
  },
  Doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;
