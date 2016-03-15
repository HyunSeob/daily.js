/* This is just test code from 'You don't need lodash/underscore'
** You can find all codes from followed link:
** https://github.com/cht8687/You-Dont-Need-Lodash-Underscore
*/

'use strict';

const _ = require('lodash');

// Test data
let users = [{
  name: 'hslee',
  age: 27
}, {
  name: 'smlee',
  age: 28
}];
let strArr = ['a', 'b', 'c'];
let numArr = [5, 10, 15];
let numArr2 = [11, 20, 100];
let numArr3 = [1, 1, 2, 2, 3];

// Test functions
function is20s(user) {
  return user.age >= 20 && user.age < 30;
}

function is10s(user) {
  return user.age >= 10 && user.age < 20;
}

function isLargerThanTen(element) {
  return element > 10;
}

function sumValues(prevValue, currValue) {
  return prevValue + currValue;
}

// _.each
{
  function lodashEach() {
    let result = [];
    _.each(strArr, function(value, index) {
      result.push(value);
      result.push(index);
    });
    return JSON.stringify(result);
  }

  function nativeEach() {
    let result = [];
    strArr.forEach(function(value, index) {
      result.push(value);
      result.push(index);
    });
    return JSON.stringify(result);
  }

  console.log('Each: ', lodashEach() === nativeEach());
}

// _.map
{
  function lodashMap() {
    return JSON.stringify(_.map(strArr, function(value, index) {
      return parseInt(value) + index;
    }));
  }

  function nativeMap() {
    return JSON.stringify(strArr.map(function(value, index) {
      return parseInt(value) + index;
    }));
  }

  console.log('Map: ', lodashMap() === nativeMap());
}

// _.every
{
  function lodashEvery() {
    let result = [];
    result.push(_.every(numArr, isLargerThanTen));
    result.push(_.every(numArr2, isLargerThanTen));
    return JSON.stringify(result);
  }

  function nativeEvery() {
    let result = [];
    result.push(numArr.every(isLargerThanTen));
    result.push(numArr2.every(isLargerThanTen));
    return JSON.stringify(result);
  }

  console.log('Every: ', lodashEvery() === nativeEvery());
}

// _.some
{
  function lodashSome() {
    let result = [];
    result.push(_.some(numArr, isLargerThanTen));
    result.push(_.some(numArr2, isLargerThanTen));
    return JSON.stringify(result);
  }

  function nativeSome() {
    let result = [];
    result.push(numArr.some(isLargerThanTen));
    result.push(numArr2.some(isLargerThanTen));
    return JSON.stringify(result);
  }

  console.log('Some: ', lodashSome() === nativeSome());
}

// _.reduce
{
  function lodashReduce() {
    return _.reduce(strArr, sumValues);
  }

  function nativeReduce() {
    return strArr.reduce(sumValues);
  }

  console.log('Reduce: ', lodashReduce() === nativeReduce());
}

// _.reduceRight
{
  function lodashReduceRight() {
    return _.reduceRight(strArr, sumValues);
  }

  function nativeReduceRight() {
    return strArr.reduceRight(sumValues);
  }

  console.log('ReduceRight: ', lodashReduceRight() === nativeReduceRight());
}

// _.filter
{
  function lodashFilter() {
    return JSON.stringify(_.filter(numArr, isLargerThanTen));
  }

  function nativeFilter() {
    return JSON.stringify(numArr.filter(isLargerThanTen));
  }

  console.log('Filter: ', lodashFilter() === nativeFilter());
}

// _.find
{
  function lodashFind() {
    let result = [];
    result.push(_.find(users, is20s));
    result.push(_.find(users, is10s));
    return JSON.stringify(result);
  }

  function nativeFind() {
    let result = [];
    result.push(users.find(is20s));
    result.push(users.find(is10s));
    return JSON.stringify(result);
  }

  console.log('Find: ', lodashFind() === nativeFind());
}

// _.findIndex
{
  function lodashFindIndex() {
    let result = [];
    result.push(_.findIndex(users, is20s));
    result.push(_.findIndex(users, is10s));
    return JSON.stringify(result);
  }

  function nativeFindIndex() {
    let result = [];
    result.push(users.findIndex(is20s));
    result.push(users.findIndex(is10s));
    return JSON.stringify(result);
  }

  console.log('FindIndex: ', lodashFindIndex() === nativeFindIndex());
}

// _.indexOf
{
  function lodashIndexOf() {
    let result = [];
    result.push(_.indexOf(strArr, 'a'));
    result.push(_.indexOf(strArr, 'd'));
    return JSON.stringify(result);
  }

  function nativeIndexOf() {
    let result = [];
    result.push(strArr.indexOf('a'));
    result.push(strArr.indexOf('d'));
    return JSON.stringify(result);
  }

  console.log('IndexOf: ', lodashIndexOf() === nativeIndexOf());
}

// _.lastIndexOf
{
  function lodashLastIndexOf() {
    let result = [];
    result.push(_.lastIndexOf(numArr3, 2));
    result.push(_.lastIndexOf(numArr3, 0));
    return JSON.stringify(result);
  }

  function nativeLastIndexOf() {
    let result = [];
    result.push(numArr3.lastIndexOf(2));
    result.push(numArr3.lastIndexOf(0));
    return JSON.stringify(result);
  }

  console.log('LastIndexOf: ', lodashLastIndexOf() === nativeLastIndexOf());
}
