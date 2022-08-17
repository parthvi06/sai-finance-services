const router = require('express').Router();
let Detail = require('../models/detail.model');

router.route('/').get((req, res) => {
  Detail.find()
    .then(details => res.json(details))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const number = req.body.number;
  const email = req.body.email;
  const nameg = req.body.nameg;

  const newDetail = new Detail({
    name,
    number,
    email,
    nameg
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