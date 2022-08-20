 router = require('express').Router();
let Detail = require('../models/detail.model');

router.route('/').get((req, res) => {
  Detail.find()
    .then(details => res.json(details))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
   name = req.body.name;
   number = req.body.number;
   email = req.body.email;
   nameg = req.body.nameg;
   birthdate  = req.body.birthdate;
   father_fname = req.body.father_fname;
   father_lname = req.body.father_lname;
   mother_fname = req.body.mother_fname;
   mother_lname = req.body.mother_lname;
   marital = req.body.marital;
   citizen = req.body.citizen;
   resident =req.body.resident;
   pancard = req.body.pancard; 
   ckyc = req.body.ckyc;
   profession = req.body.profession;
   company = req.body.company;
   designation = req.body.designation;
   gross = req.body.gross;
   coemail = req.body.coemail;
   house = req.body.house;
   street = req.body.street;
   area = req.body.area;
   landmark = req.body.landmark; 
   pincode = req.body.pincode;
   city = req.body.city;

   newDetail = new Detail({
    name,
    number,
    email,
    nameg,
    birthdate,
    father_fname,
    father_lname,
    mother_fname,
    mother_lname,
    marital,
    citizen,
    resident,
    pancard, 
    ckyc,
    profession,
    company,
    designation,
    gross,
    coemail,
    house,
    street,
    area,
    landmark, 
    pincode,
    city
  });

newDetail.save()
  .then(() => res.json('Detail added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Detail.findById(req.params.id)
    .then(detail => res.json(detail))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Detail.findByIdAndDelete(req.params.id)
    .then(() => res.json('Detail deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Detail.findById(req.params.id)
    .then(detail => {
      detail.name = req.body.name;
      detail.number = req.body.number;
      detail.email = Number(req.body.email);
      detail.date = Date.parse(req.body.date);

      detail.save()
        .then(() => res.json('Detail updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;