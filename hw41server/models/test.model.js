var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema ({
    beverage: String,
    meal: String,
    dessert: String,
    order_was_sent: Boolean
});

var JulRestaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = JulRestaurant; 