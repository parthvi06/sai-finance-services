const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  nameg: { type: String}
}, {
  timestamps: true,
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;