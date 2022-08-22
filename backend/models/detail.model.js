const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
  name: { type: String,  },
  email: { type: String,  },
  number: { type: String,  },
  nameg: { type: String},
  birthdate: { type: String,  },
  father_fname: { type: String,  },
  father_lname: { type: String,  },
  mother_fname: { type: String,  },
  mother_lname: { type: String,  },
  marital_status: { type: String,  },
  citizen: { type: String,  },
  resident: { type: String,  },
  pancard: { type: String,  },
  ckyc: { type: String,  },
  profession: { type: String,  },
  company: { type: String,  },
  designation: { type: String,  },
  gross: { type: String,  },
  coemail: { type: String,  },
  house: { type: String,  },
  street: { type: String,  },
  area: { type: String,  },
  landmark: { type: String,  },
  pincode: { type: String,  },
  city: { type: String,  },
  image: { type: String,  },
}, {
  timestamps: true,
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;