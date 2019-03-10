var express = require('express');
var router = express.Router();
var JulRestaurant = require("../models/test.model")
/* GET home page. */

router.get('/menu', function (req, res, next) {

    JulRestaurant.find().then(data => {
        res.json(data)
    })

});


router.post('/', function (req, res, next) {

    var newRest = new JulRestaurant({
        beverage: req.body.Beverages,
        meal: req.body.Lunch,
        dessert: req.body.Desserts,
        order_was_sent: false
    });

    newRest.save(function (err, doc) {
        if (err) throw err;
        res.json(doc)
    });

});


router.put('/menu/:_id', function (req, res, next) {

    JulRestaurant.findByIdAndUpdate(req.params._id,
        {
            $set: { order_was_sent: true }
        },
        {
            new: true
        },

        function (err, updatedOrder) {
            if (err) throw err;
            res.json(updatedOrder)
        }

    )

});

// router.get('/menu', function(req, res, next) {

//     moviesHandler.getAllMovies().then(data=>{
//       res.json(data)
//     });
//     });


module.exports = router;
