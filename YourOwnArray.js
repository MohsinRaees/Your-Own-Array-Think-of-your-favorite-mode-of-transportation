//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = ["Honda", "Unique Bike", "Toyota Car"];
favoriteTransportation.forEach(function (vehicle) {
    var statement = "I would like to own a ".concat(vehicle, ".");
    console.log(statement);
});
