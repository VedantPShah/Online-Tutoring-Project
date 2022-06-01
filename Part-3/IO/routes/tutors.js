var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/IO');

var collection = db.get('Tutors');

/* Index. All tutors displayed in api/Tutors */
router.get('/', function(req, res) {
  collection.find({},function(err, Tutors){
    if (err) throw err;
      res.json(Tutors);
  })
});

/* Show. Specific Tutor displayed by adding id of the tutor in api/Tutors/... */
router.get('/:id', function(req, res) {
    collection.find({_id: req.params.id },function(err, Tutor){
      if (err) throw err;
        res.json(Tutor);
    })
  });

/* Create. Insert tutor in the collection using postman */
  router.post('/', function(req, res) {
    collection.insert({
        name : req.body.name,
        email : req.body.email,
        phoneNo : req.body.phoneNo,
        image : req.body.image,
        location : req.body.location,
        aboutMe : req.body.aboutMe,
        details : req.body.details,
        course : req.body.course,
        rating : req.body.rating,
        totalHours : req.body.totalHours

    },function(err, Tutor){
      if (err) throw err;
        res.json(Tutor);
    })
  });


/* Update. Update the field values of a specific tutor */
  router.put('/:id', function(req, res) {
    collection.update({_id: req.params.id },{ $set : {
        name : req.body.name,
        email : req.body.email,
        phoneNo : req.body.phoneNo,
        image : req.body.image,
        location : req.body.location,
        aboutMe : req.body.aboutMe,
        details : req.body.details,
        course : req.body.course,
        rating : req.body.rating,
        totalHours : req.body.totalHours
        
        }
    },
    function(err, Tutor){
      if (err) throw err;
        res.json(Tutor);
    })
  });

/* Destroy. Delete specific Tutor by adding id of the tutor in api/Tutors/... */
router.delete('/:id', function(req, res) {
    collection.remove({_id: req.params.id },function(err, Tutor){
      if (err) throw err;
        res.json(Tutor);
    })
  });
  

module.exports = router;
