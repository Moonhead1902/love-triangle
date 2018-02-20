/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;

  for (var i = 0; i < preferences.length; i++){
    if (preferences[i] != undefined){
      var frstInt = preferences[i];
      var scndInt = preferences[frstInt - 1];
      var thrdInt = preferences[scndInt - 1];

      if (i === thrdInt - 1 && frstInt != scndInt && scndInt != thrdInt){
        counter++;
        delete preferences[i];
        delete preferences[frstInt - 1];
        delete preferences[scndInt - 1];
      }
    }
  }

  return counter;
};
