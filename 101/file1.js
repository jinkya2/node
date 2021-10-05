const car = {   // can also directly export -> exports.car = {brand:...}
  brand: "Mahindra",
  model: "XUV700",
};
//module.exports = car; // exports {brand:...}
exports.car1 = car; // exports {car1: {brand:...}}
