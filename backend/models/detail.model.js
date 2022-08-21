const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  nameg: { type: String},
  birthdate: { type: Datecd, required: true },
  father_fname: { type: String, required: true },
  father_lname: { type: String, required: true },
  mother_fname: { type: String, required: true },
  mother_lname: { type: String, required: true },
  marital: { type: String, required: true },
  citizen: { type: String, required: true },
  resident: { type: String, required: true },
  pancard: { type: String, required: true },
  ckyc: { type: String, required: true },
  profession: { type: String, required: true },
  company: { type: String, required: true },
  designation: { type: String, required: true },
  gross: { type: String, required: true },
  coemail: { type: String, required: true },
  house: { type: String, required: true },
  street: { type: String, required: true },
  area: { type: String, required: true },
  landmark: { type: String, required: true },
  pincode: { type: String, required: true },
  city: { type: String, required: true },
}, {
  timestamps: true,
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;