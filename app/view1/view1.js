'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {

  // Make a plaintext variable
  $scope.plainText = '';

  // Make an output/ cipher text variable
  $scope.output = '';
  
  $scope.key = '';

  // encryption function
  $scope.caesarShift = function(str, amount) {


    // Wrap the amount
    if (amount < 0)
      return caesarShift(str, amount + 26);


    // Go through each character
    for (var i = 0; i < str.length; i ++) {

      // Get the character we'll be appending
      var c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {

        // Get its code
        var code = str.charCodeAt(i);
          console.log(code);

        // Uppercase letters
        if ((code >= 65) && (code <= 90)) {
          var d = 65;
          console.log(code+ '  '+ amount + " " + d);
          var debug = code - d;
          console.log(debug);
          debug +=parseInt(amount);
          console.log(debug);


          c = String.fromCharCode(((code - 65 + parseInt(amount)) % 26) + 65);
          // Lowercase letters
        }else if ((code >= 97) && (code <= 122))
          c = String.fromCharCode(((code - 97 + parseInt(amount)) % 26) + 97);

      }


      // Append
      $scope.output += c;
      

    }

    // All done!
    return $scope.output;
  };

  $scope.cipherText = '';

  $scope.cipherOutput = '';
  
  $scope.decryptKey = '';
  // decryption function
  $scope.caesarShiftDecrypt = function(str, amount) {


    // Wrap the amount
    if (amount < 0)
      return caesarShift(str, amount + 26);


    // Go through each character
    for (var i = 0; i < str.length; i ++) {

      // Get the character we'll be appending
      var c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {

        // Get its code
        var code = str.charCodeAt(i);
        // Uppercase letters
        if ((code >= 65) && (code <= 90)) {

          if(((code - 65 - parseInt(amount)) % 26 )< 0) {
            c = String.fromCharCode((((code - 65 - parseInt(amount)) % 26) + 26) + 65);
          }
          else
          c = String.fromCharCode(((code - 65 - parseInt(amount)) % 26) + 65);
        }
        // Lowercase letters
        else if ((code >= 97) && (code <= 122)) {
          if(((code - 97 - parseInt(amount)) % 26) < 0)
            c = String.fromCharCode((((code - 97 - parseInt(amount)) % 26) + 26) + 97);
          else
            c = String.fromCharCode(((code - 97 - parseInt(amount)) % 26) + 97);
        }
      }
      // Append
      $scope.cipherOutput += c;
    }

    // All done!
    return $scope.cipherOutput;
  };
  
  //clears the out of the caesar encryption function
  $scope.clear = function () {
      $scope.output = '';
  }

  //clears the out of the caesar decryption function
  $scope.clearCipher = function () {
      $scope.cipherOutput = '';
  }


});