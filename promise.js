'use strict';

const Q = require('q');

// {
//   getRandomNumber()
//   .then(function(result) {
//     console.log('1st Random number:', result);
//     return getRandomNumber();
//   })
//   .then(function(result) {
//     console.log('2nd Random number:', result);
//   })
//   .catch(function(err) {
//     console.log('Error ocuured:', err.message);
//   })
//   .finally(function() {
//     console.log('All Jobs are done!');
//   });
//
//   function getRandomNumber() {
//   	let deferred = Q.defer();
//     setTimeout(function() {
//   	  console.log('Delayed Job Complete!');
//       let rand = Math.random();
//       if (rand > 0.2) {
//         deferred.resolve(getRejectedPromise());
//       } else {
//         deferred.reject({ message: 'Random number is lower than 0.5.' });
//       }
//   	}, 1000);
//     return deferred.promise;
//   }
//
//   function getRejectedPromise() {
//     let deferred = Q.defer();
//     deferred.reject({ message: 'Rejected!' });
//     return deferred.promise;
//   }
// }

{
  getRandomNumber()
  .then(function(result) {
    console.log('1st Random number:', result);
    return getRandomNumber();
  })
  .then(function(result) {
    console.log('2nd Random number:', result);
  })
  .catch(function(err) {
    console.log('Error ocuured:', err.message);
  })
  .finally(function() {
    console.log('All Jobs are done!');
  });

  function getRandomNumber() {
  	let deferred = Q.defer();
    setTimeout(function() {
  	  console.log('Delayed Job Complete!');
      let rand = Math.random();
      if (rand > 0.2) {
        deferred.resolve(rand);
      } else {
        deferred.reject({ message: 'Random number is lower than 0.5.' });
      }
  	}, 1000);
    return deferred.promise;
  }
}

// {
//   getRandomNumber(function (result) {
//     console.log('1st Random number:', result);
//     getRandomNumber(function (result) {
//       console.log('2nd Random number:', result);
//     }, function (err) {
//       console.log('Error ocuured:', err.message);
//     });
//   }, function (err) {
//     console.log('Error ocuured:', err.message);
//   });
//
//   function getRandomNumber(successCallback, errorCallback) {
//     setTimeout(function() {
//       console.log('Delayed Job Complete!');
//       let rand = Math.random();
//       if (rand > 0.5) {
//         successCallback(rand);
//       } else {
//         errorCallback({ message: 'Random number is lower than 0.5.' });
//       }
//     }, 1000);
//   }
// }
