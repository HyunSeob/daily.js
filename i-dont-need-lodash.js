// This is just practice code from 'You don't need to lodash'
// You can find all codes from followed link:
// https://github.com/cht8687/You-Dont-Need-Lodash-Underscore

'use strict';

const _ = require('lodash');

function lodashLog() { console.log('lodash:', arguments); }
function nativeLog() { console.log('native:', arguments); }


// _.each
{
  let arr = ['a', 'b', 'c'];
  function lodashEach() {
    let result = [];
    _.each(arr, function(value, index) {
      result.push(value);
      result.push(index);
    });
    return JSON.stringify(result);
  }

  function nativeEach() {
    let result = [];
    arr.forEach(function(value, index) {
      result.push(value);
      result.push(index);
    });
    return JSON.stringify(result);
  }

  console.log('Each: ', lodashEach() === nativeEach());
}

// _.map
{
  let arr = ['1', '2', '3'];
  function lodashMap() {
    return JSON.stringify(_.map(arr, function(value, index) {
      return parseInt(value) + index;
    }));
  }

  function nativeMap() {
    return JSON.stringify(arr.map(function(value, index) {
      return parseInt(value) + index;
    }));
  }

  console.log('Map: ', lodashMap() === nativeMap());
}

// _.every
{
  function isLargerThanTen(element) {
    return element > 10;
  }
  let arr = [5, 10, 15];
  let arr2 = [11, 20, 100];

  function lodashEvery() {
    let result = [];
    result.push(_.every(arr, isLargerThanTen));
    result.push(_.every(arr2, isLargerThanTen));
    return JSON.stringify(result);
  }

  function nativeEvery() {
    let result = [];
    result.push(arr.every(isLargerThanTen));
    result.push(arr2.every(isLargerThanTen));
    return JSON.stringify(result);
  }

  console.log('Every: ', lodashEvery() === nativeEvery());
}

// _.some
{
  function isLargerThanTen(element) {
    return element > 10;
  }
  let arr = [5, 10, 15];
  let arr2 = [11, 20, 100];

  function lodashSome() {
    let result = [];
    result.push(_.some(arr, isLargerThanTen));
    result.push(_.some(arr2, isLargerThanTen));
    return JSON.stringify(result);
  }

  function nativeSome() {
    let result = [];
    result.push(arr.some(isLargerThanTen));
    result.push(arr2.some(isLargerThanTen));
    return JSON.stringify(result);
  }

  console.log('Some: ', lodashSome() === nativeSome());
}
