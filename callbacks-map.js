var words = ["ground", "control", "to", "major", "tom"];

function myMap(array, cbFunction) {
  var returnArray = []; // declaring an Array that needs to be returned
  array.forEach( function (element) {

    returnArray.push(cbFunction(element)); // pushing the returnArray with values from the cb Function for each element
  });
  return returnArray; // end goal is to return an Array
}

myMap(words, function(word) {
  return word.length;
});





