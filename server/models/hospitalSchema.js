const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    city: String,
    pincode: Number,
    street: String,
  },
  Department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
