const Slot = require('../db/models/slotSchema');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports.getSlot = async (req, res) => {
  const slot = await Slot.find();
  res.status(200).json(slot);
};
module.exports.postSlot = async (req, res) => {
  const body = req.body;
  const slot = await Slot.create({
    Date: body.Date,
    From: body.From,
    To: body.To,
    AvailableSlots: body.AvailableSlots,
    doctorId: body.doctorId,
  });
  res.status(200).json({ message: 'posted' });
};
